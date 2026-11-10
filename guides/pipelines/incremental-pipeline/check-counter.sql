-- Não filtre mdmDeleted: uma exclusão também faz parte do progresso.
select
  max(mdmStagingCounter) as max_counter,
  datetime(timestamp_micros(max(mdmStagingCounter))) as ultimo_recebimento_processado
from `ingestion_guiapedidosincremental`;
