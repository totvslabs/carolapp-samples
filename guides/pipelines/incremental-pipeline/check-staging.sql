select
  pedido_id,
  quantidade,
  preco_unitario_centavos,
  mdmId,
  mdmCounterForEntity,
  coalesce(mdmDeleted, false) as mdmDeleted,
  _ingestionDatetime
from `stg_crm_demo_pedidos_incrementais`
qualify row_number() over (
  partition by mdmId
  order by mdmCounterForEntity desc, mdmLastUpdated desc, _ingestionDatetime desc
) = 1
order by pedido_id;
