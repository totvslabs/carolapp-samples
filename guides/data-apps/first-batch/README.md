# Seu primeiro processo batch no LYNN Data App

Exemplo mínimo: processa três itens fictícios, registra um evento por item e encerra.
Reutiliza a rotina da referência de Batch App da documentação, com manifesto
apontando para este repositório público.

## Revisão do exemplo

O manifesto aponta para a branch `codex/first-lynn-data-app-batch` durante a validação
do guia. Depois do merge, ajustar `gitBranch` para `master` antes de publicar o guia
como definitivo. A branch de revisão deve permanecer disponível enquanto usada.

## Teste local

Na raiz deste repositório:

```bash
python3 guides/data-apps/first-batch/main.py
ITEM_LIMIT=5 python3 guides/data-apps/first-batch/main.py
```

A última linha deve mostrar `completed` e `total` igual a 3 ou 5, respectivamente.
Com `ITEM_LIMIT=0`, o programa deve encerrar com erro e código diferente de zero.

## Teste com Docker

```bash
docker build -t lynn-guide-batch:1.0.0 guides/data-apps/first-batch
docker run --rm -e ITEM_LIMIT=3 lynn-guide-batch:1.0.0
```

## Execução na plataforma

1. Na tenant de desenvolvimento, criar um app separado para o exercício.
2. Em Files, enviar `manifest.json` como Monitor Processes.
3. Construir `lynn-guide-batch` pelo Build do app.
4. Em Process, executar `batch_demo` e conferir task e logs.
5. Após a execução manual, configurar e conferir o agendamento.

O exemplo não usa dados da tenant, APIs externas ou credenciais no código.
O build e a execução utilizam recursos da plataforma.

Para repetir a execução com cinco itens, alterar `ITEM_LIMIT` no manifesto,
reenviá-lo e iniciar outra task. A imagem pode ser reutilizada. Antes de reenviar
um manifesto de um app agendado, registrar cron e fuso: há um problema conhecido
de perda dos agendamentos nesse fluxo.
