# Sua primeira pipeline incremental

Este exemplo continua [Sua primeira pipeline](../first-pipeline/README.md).
Conclua o primeiro exercício: nele, você recebe os pedidos, calcula seus valores
e confere uma atualização.

Agora, a mesma regra ganha o controle incremental com `MAX(mdmStagingCounter)`.
Você reaproveita a tenant dev, o Carol App e a configuração dos campos, cria uma nova STG e
um novo DM e reenvia os pedidos para comparar as duas pipelines.
A **watermark** é o maior contador de recebimento salvo no destino; a próxima leitura parte desse valor.

## Reaproveite o primeiro exemplo

Use a mesma tenant dev, o Carol App, o connector `crm_demo`, os campos, tipos e a chave `pedido_id`
do primeiro exemplo. Crie as tabelas com estes nomes e publique o DM, mesmo vazio:

| Recurso | Nome |
|---|---|
| staging table (STG) | `pedidos_incrementais` |
| data model (DM) | `guiapedidosincremental` |
| Pipeline | `guia_pedidos_incremental` |

No **Carol App do primeiro guia**, faça um novo checkout usando
`guides/pipelines/incremental-pipeline/pipelines.json`. A conexão deve apontar para
a branch `master` do repositório oficial `totvslabs/carolapp-samples`, a mesma do primeiro exemplo.

O manifest reúne `guia_pedidos` e `guia_pedidos_incremental` no mesmo app e
reaproveita o SQL do primeiro exemplo. As duas pipelines continuam com execução manual.

## Arquivos

| Arquivo | Uso |
|---|---|
| [pipelines.json](pipelines.json) | Configuração das duas pipelines no mesmo app |
| [pedidos.csql](pedidos.csql) | Código incremental completo |
| [pedidos.json](pedidos.json) | Primeira carga com três pedidos |
| [pedidos-atualizados.json](pedidos-atualizados.json) | Atualiza P001 e inclui P004 |
| [pedido-excluido.json](pedido-excluido.json) | Chave de P002 para exclusão por crosswalk |
| [check-staging.sql](check-staging.sql) | Versão atual na STG, incluindo exclusões |
| [check-results.sql](check-results.sql) | Pedidos ativos no DM |
| [check-counter.sql](check-counter.sql) | Watermark no destino |

## Confira o resultado

Reutilize o envio por endpoint do primeiro exemplo com `table=pedidos_incrementais`.
Aguarde a chegada à STG antes de executar a pipeline, e a conclusão da task antes de consultar o DM.

| Rodada | Resultado esperado |
|---|---|
| `pedidos.json` | Três pedidos; P001 com quantidade 2 e total 2500 centavos |
| `pedidos-atualizados.json` | Quatro pedidos; P001 com quantidade 4 e total 5000; P004 com total 3000 |
| Reexecução sem novo envio | Quatro pedidos atuais e watermark iguais |

> O corte usa o contador de recebimento da origem preservado no DM (`mdmStagingCounter`). A leitura inclui contadores iguais à watermark e mantém `overlapDeltaMinutes` em zero. Dados com contador anterior ao limite que ficarem disponíveis depois exigem recuperação específica.

Os detalhes de exclusão, partição e recuperação ficam no guia do Carol Docs.
