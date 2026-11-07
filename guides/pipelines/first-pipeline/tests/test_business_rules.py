"""Validação local da transformação; não simula o motor da Carol/BigQuery."""
import json
import sqlite3
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SQL = (ROOT / 'pedidos.csql').read_text()
# A expansão real dos campos internos não é exercitada neste teste local.
LOCAL_SQL = SQL.replace('`stg_crm_demo_pedidos`', '`source_records`').replace('--metadata-v2--', '')
# SQLite não possui QUALIFY. Só essa cláusula é adaptada para uma subconsulta;
# a sintaxe original e os metadados exigem validação no BigQuery da Carol.
projection, qualify = LOCAL_SQL.rsplit('qualify', 1)
columns, source = projection.rsplit('\nfrom ', 1)
ranking = qualify.rsplit('=', 1)[0].strip()
LOCAL_SQL = (
    f'with ranked as ({columns}, {ranking} as version_rank\nfrom {source}) '
    'select pedido_id, quantidade, preco_unitario_centavos, '
    'valor_total_centavos, mdmDeleted from ranked where version_rank = 1'
)
INPUT = json.loads((ROOT / 'pedidos.json').read_text())
MANIFEST = json.loads((ROOT / 'pipelines.json').read_text())


def record(pedido_id, quantidade, preco, counter, deleted=False):
    # Metadata sintética usada somente no teste local, não na ingestão.
    return (pedido_id, str(quantidade), str(preco), pedido_id, 'tenant-ficticia', counter,
            deleted, 'audit-exemplo', None, None, 'crm_demo|pedidos', counter, counter)


def execute(rows):
    with sqlite3.connect(':memory:') as conn:
        conn.execute('''create table source_records (
            pedido_id text, quantidade text, preco_unitario_centavos text,
            mdmId text, mdmTenantId text, mdmCounterForEntity integer,
            mdmDeleted boolean, mdmAuditId text, mdmBatchId text,
            mdmBatchIdSequence integer, mdmEntityType text,
            mdmLastUpdated integer, _ingestionDatetime integer
        )''')
        conn.executemany('insert into source_records values (?,?,?,?,?,?,?,?,?,?,?,?,?)', rows)
        result = conn.execute(LOCAL_SQL).fetchall()
        return sorted(result)


class FirstPipelineTest(unittest.TestCase):
    def test_initial_totals(self):
        rows = [record(p['pedido_id'], p['quantidade'], p['preco_unitario_centavos'], i)
                for i, p in enumerate(INPUT, 1)]
        self.assertEqual(execute(rows), [
            ('P001', 2, 1250, 2500, 0),
            ('P002', 3, 990, 2970, 0),
            ('P003', 1, 3490, 3490, 0)])

    def test_empty_source(self):
        self.assertEqual(execute([]), [])

    def test_update_selects_newest_version(self):
        rows = [record('P001', 2, 1250, 100), record('P001', 4, 1250, 200)]
        self.assertEqual(execute(rows), [('P001', 4, 1250, 5000, 0)])

    def test_older_version_inserted_after_newer(self):
        rows = [record('P001', 4, 1250, 200), record('P001', 2, 1250, 100)]
        self.assertEqual(execute(rows), [('P001', 4, 1250, 5000, 0)])

    def test_identical_repeated_source_record(self):
        row = record('P001', 2, 1250, 100)
        self.assertEqual(execute([row, row]), [('P001', 2, 1250, 2500, 0)])

    def test_latest_deletion_marker_preserved(self):
        rows = [record('P002', 3, 990, 100), record('P002', 3, 990, 200, True)]
        self.assertEqual(execute(rows), [('P002', 3, 990, 2970, 1)])

    def test_null_deletion_marker_defaults_false(self):
        self.assertEqual(execute([record('P003', 1, 3490, 100, None)]),
                         [('P003', 1, 3490, 3490, 0)])

    def test_data_model_name_matches_platform_contract(self):
        # Regressão da recusa real de guia_pedidos pelo endpoint de Data Model.
        self.assertRegex(MANIFEST['pipelines'][0]['outputDataModelName'], r'^[a-z][a-z0-9]{0,63}$')

    def test_manifest_is_valid_json_and_refers_to_candidate(self):
        self.assertEqual(MANIFEST['version'], 'V2')
        p = MANIFEST['pipelines'][0]
        self.assertEqual(p['processScript'], 'pedidos.csql')
        self.assertEqual(p['sourceEntities']['stagings'],
                         [{'connectorName': 'crm_demo', 'stagingName': 'pedidos'}])
        self.assertEqual(p['cronExpressions'], [])
        self.assertFalse(p['fanOut'])
        self.assertFalse(any(p['clear']['bigquery'].values()))
        self.assertEqual(p['sendTo']['bigquery'], {'customer': False, 'unified': True})


    def test_equal_counters_use_last_updated_as_tiebreaker(self):
        older = record('P001', 2, 1250, 100)
        newer = record('P001', 4, 1250, 100)[:-2] + (200, 200)
        self.assertEqual(execute([newer, older]), [('P001', 4, 1250, 5000, 0)])

    def test_scheduled_manifest_only_changes_the_schedule(self):
        scheduled = json.loads((ROOT / 'pipelines-scheduled.json').read_text())
        self.assertEqual(scheduled['pipelines'][0]['cronExpressions'], ['0 0 8 ? * MON-FRI *'])
        self.assertEqual(scheduled['pipelines'][0]['timeZone'], 'America/Sao_Paulo')
        scheduled['pipelines'][0]['cronExpressions'] = []
        self.assertEqual(scheduled, MANIFEST)


if __name__ == '__main__':
    unittest.main(verbosity=2)
