-- A view entrega a versão atual de cada pedido e já trata a marca de exclusão.
-- É conveniente para este teste pequeno. Para projetos com mais dados, veja
-- check-results-partitioned.sql e a seção Consultas e desempenho do README.md.
select
  pedido_id,
  quantidade,
  preco_unitario_centavos,
  valor_total_centavos
from `deduplicated_guiapedidos`
where coalesce(mdmDeleted, false) = false
order by pedido_id
