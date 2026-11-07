# Sua primeira pipeline

Simule um sistema de vendas que envia pedidos para a Carol. A pipeline escolhe a versão mais atual de cada registro, converte quantidade e preço para números e calcula o valor do pedido. Depois, você envia uma alteração para conferir o recálculo.

Os dados são fictícios e serão armazenados em sua tenant dev.

> **Em revisão:** a jornada completa está sendo preparada no Carol Docs, em **Guias → Pipelines → Sua primeira pipeline**. O link público será incluído após a publicação.

## Antes de começar

Use uma tenant dev com acesso de **Tenant Admin**. Crie os recursos abaixo e publique o data model (DM) antes de executar a pipeline.

| Recurso | Configuração |
|---|---|
| Carol App | Um nome próprio e disponível, escolhido por você |
| connector | `crm_demo` |
| staging table (STG), tabela de dados brutos | `pedidos` |
| Chave primária da STG | `pedido_id` |
| DM, tabela de negócio | `guiapedidos` |
| Pipeline | `guia_pedidos`, criada pelo manifest |

Na STG, configure `pedido_id`, `quantidade` e `preco_unitario_centavos` como **STRING**. No DM, mantenha `pedido_id` como **STRING** e use **LONG** para `quantidade`, `preco_unitario_centavos` e `valor_total_centavos`. Os valores monetários são em centavos.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| [pedidos.json](pedidos.json) | Três pedidos para enviar por um endpoint de API REST |
| [pedido-atualizado.json](pedido-atualizado.json) | Nova versão de P001, com quantidade 4 |
| [pedidos.csql](pedidos.csql) | Regras de negócio e escolha da versão mais atual de cada registro |
| [pipelines.json](pipelines.json) | Manifest de configuração da infraestrutura da pipeline, com execução manual |
| [pipelines-scheduled.json](pipelines-scheduled.json) | Variante com agenda para dias úteis às 08h de São Paulo |
| [check-staging.sql](check-staging.sql) | Consulta dos pedidos atuais na STG |
| [check-results.sql](check-results.sql) | Consulta dos pedidos atuais no DM |
| [check-results-partitioned.sql](check-results-partitioned.sql) | Exemplo de consulta com filtro de partição |

## Use os arquivos

1. Envie o conteúdo de `pedidos.json` pelo endpoint **POST `/api/v6/staging/intake/{table}`**, com `table=pedidos` e o ID do connector `crm_demo`
2. Aguarde a gravação dos registros na STG e confira com `check-staging.sql`
3. Conecte este repositório ao Carol App e selecione a branch que contém os arquivos. No checkout, informe `guides/pipelines/first-pipeline/pipelines.json` em **Relative path**, sem `/` no início
4. Execute `guia_pedidos` com **Process all data** e acompanhe a task até o sucesso
5. Execute `check-results.sql` para conferir o DM
6. Envie `pedido-atualizado.json`, aguarde a nova versão chegar à STG e execute a pipeline novamente

O manifest principal não ativa uma agenda. Use a variante agendada somente quando quiser executar a pipeline de forma recorrente.

## Resultado esperado

| Pedido | Quantidade inicial | Valor inicial em centavos | Após a atualização |
|---|---:|---:|---|
| P001 | 2 | 2500 | Quantidade 4 e valor 5000 |
| P002 | 3 | 2970 | Sem alteração |
| P003 | 1 | 3490 | Sem alteração |

A consulta deve continuar mostrando três pedidos atuais após reexecutar a pipeline.

## Consultas e desempenho

`check-results.sql` usa `deduplicated_guiapedidos`, a view que facilita a consulta da versão atual. Para tabelas maiores, avalie filtros de partição na query para reduzir a leitura.

`check-results-partitioned.sql` considera apenas versões gravadas nos últimos sete dias. Registros sem versões nessa janela ficam fora do resultado. Ajuste o período conforme a necessidade do projeto.
