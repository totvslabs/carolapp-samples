-- No Explore, substitua ID_DA_TASK pelo identificador da execução.
-- A consulta exige acesso autorizado à view de logs da plataforma.
select
  task_id,
  severity,
  severity_number,
  text_payload
from `ideia-dataops-prod.platform.carol_app_logs`
where task_id = 'ID_DA_TASK'
  and (
    severity_number >= 500
    or regexp_contains(text_payload, r'(?i)traceback|exception|error')
  )
order by timestamp desc
limit 200;
