-- A view já entrega os registros atuais sem os excluídos.
select
  pedido_id,
  quantidade,
  preco_unitario_centavos,
  valor_total_centavos,
  mdmStagingCounter
from `deduplicated_guiapedidosincremental`
order by pedido_id;
