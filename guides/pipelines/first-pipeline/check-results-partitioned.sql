-- Exemplo de leitura das versões gravadas nos últimos sete dias.
-- Ajuste o período ao seu projeto: pedidos sem versões nessa janela não aparecem.
-- O filtro de exclusão fica no QUALIFY, depois da escolha da versão mais recente.
select
  pedido_id,
  quantidade,
  preco_unitario_centavos,
  valor_total_centavos
from `ingestion_guiapedidos`
where _ingestionDatetime >= datetime_sub(current_datetime('UTC'), interval 7 day)
qualify row_number() over (
  partition by mdmId
  order by mdmStagingCounter desc, mdmCounterForEntity desc
) = 1
  and coalesce(mdmDeleted, false) = false
order by pedido_id
