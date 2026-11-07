select
  pedido_id,
  quantidade,
  preco_unitario_centavos,
  mdmId,
  mdmCounterForEntity,
  mdmDeleted
from `stg_crm_demo_pedidos`
qualify row_number() over (
  partition by mdmId
  order by
    mdmCounterForEntity desc,
    mdmLastUpdated desc,
    _ingestionDatetime desc
) = 1
  and coalesce(mdmDeleted, false) = false
order by pedido_id
