# Seu primeiro processo batch no LYNN Data App

Exemplo mínimo: processa três itens fictícios, registra um evento por item e encerra.
Reutiliza a rotina da referência de Batch App da documentação, com manifesto
apontando para este repositório público.

O manifesto utiliza a branch principal `master` deste repositório.

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
3. Construir `lynn-guide-batch` pelo Build do app. Para o build, preferir `c1.small`
   ou `c1.medium`, conforme orientação operacional do time: menor concorrência e
   pool maior. A execução continua configurada separadamente com `c1.nano`.
4. Em Process, executar `batch_demo` e conferir task e logs.
5. Após a execução manual, configurar e conferir o agendamento.

O exemplo não usa dados da tenant, APIs externas ou credenciais no código.
O build e a execução utilizam recursos da plataforma.

Para repetir a execução com cinco itens, alterar `ITEM_LIMIT` no manifesto,
reenviá-lo e iniciar outra task. A imagem pode ser reutilizada. Antes de reenviar
um manifesto de um app agendado, registrar cron e fuso: há um problema conhecido
de perda dos agendamentos nesse fluxo.
