# Guias da Carol

Exemplos práticos para acompanhar os tutoriais do [Carol Docs](https://docs.carol.ai/).
O docs apresenta a jornada; aqui ficam o código, os arquivos de configuração e os dados usados em cada exemplo.

## Exemplos

| Tema | Guia | O que você vai fazer |
|---|---|---|
| Pipelines | [Sua primeira pipeline](pipelines/first-pipeline/README.md) | Receber pedidos, tratar os dados e conferir uma atualização |

## Organização

Cada exemplo fica em `guides/<tema>/<exemplo>/` e reúne os arquivos necessários para aquela jornada.

```text
guides/
├── README.md
└── pipelines/
    └── first-pipeline/
        ├── README.md
        ├── pedidos.csql
        ├── pipelines.json
        ├── pipelines-scheduled.json
        ├── pedidos.json
        ├── pedido-atualizado.json
        ├── check-staging.sql
        ├── check-results.sql
        └── check-results-partitioned.sql
```

## Padrão para novos guias

* Use pastas em inglês, com letras minúsculas e palavras separadas por hífen
* Agrupe os exemplos por tema e crie a pasta apenas quando houver conteúdo
* Escreva o README em português, com objetivo, pré-requisitos, arquivos, uso e resultado esperado
* Mantenha no README as instruções necessárias para usar o código; deixe a explicação completa no docs
* Inclua dados fictícios e instruções para uma tenant dev, sem tokens, credenciais ou dados de clientes
* Mantenha os caminhos dos manifests iguais aos informados no tutorial
* Antes da publicação, revise texto e código, valide o fluxo na Carol e atualize os links entre docs e samples

> O primeiro guia está em preparação. A inclusão nesta branch não representa aprovação ou publicação do tutorial.
