# Seu primeiro processo batch no Data App

Exemplo Python com pyCarol: processa itens fictícios, lê os Settings do app,
registra eventos no console e na task e encerra. A linguagem é uma escolha do guia;
um processo batch também pode usar Node.js ou outra linguagem empacotada na imagem.

O manifesto utiliza a branch principal `master` deste repositório.

## Teste local

Na raiz deste repositório:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r guides/data-apps/first-batch/requirements.txt
python guides/data-apps/first-batch/main.py --local
ITEM_LIMIT=5 python guides/data-apps/first-batch/main.py --local
```

No modo `--local`, não há chamadas nem autenticação na plataforma. A última linha
deve mostrar `completed` e `total` igual a 3 ou 5, respectivamente.
Com `ITEM_LIMIT=0`, o programa deve encerrar com erro e código diferente de zero.
O arquivo `.env.example` contém apenas configurações não sensíveis e pode ser
copiado para `.env`, ao lado de `main.py`. Variáveis já presentes no ambiente
têm prioridade. `.env` fica fora do Git e da imagem.

## Teste com Docker

```bash
docker build -t guide-batch:1.1.0 guides/data-apps/first-batch
docker run --rm -e ITEM_LIMIT=3 guide-batch:1.1.0 --local
```

## Execução na plataforma

1. Na tenant de desenvolvimento, criar um app separado para o exercício.
2. Em Files, enviar `manifest.json` como Monitor Processes.
3. Construir `guide-batch` pelo Build do app. Para o build, preferir `c1.small`
   ou `c1.medium`, conforme orientação operacional do time: menor concorrência e
   pool maior. A execução continua configurada separadamente com `c1.nano`.
4. Em Process, executar `batch_demo` e conferir task e logs.
5. Após a execução manual, configurar e conferir o agendamento.

Na plataforma, a inicialização ocorre sem `--local`: o pyCarol usa o contexto
injetado, `Apps.get_settings()` lê os parâmetros e `CarolHandler` envia logs à
task identificada por `LONGTASKID`. O Setting opcional `message_prefix` altera
a mensagem dos itens; sem ele, usa `Guia batch`. Não são impressos Settings ou
variáveis de ambiente em massa. O exemplo não acessa dados de negócio.

O build e a execução utilizam recursos distintos da plataforma. Estime seu uso
na [calculadora](https://docs.carol.ai/calculator).

Para repetir a execução com cinco itens, alterar `ITEM_LIMIT` no manifesto,
reenviá-lo e iniciar outra task. A imagem pode ser reutilizada. Antes de reenviar
um manifesto de um app agendado, registrar cron e fuso: há um problema conhecido
de perda dos agendamentos nesse fluxo.

## Branch, imagem e app

`master` é a branch remota usada para obter o código. A tag `1.1.0` identifica
a imagem construída. A versão `0.1.0` identifica o app do exercício. Mudar uma
branch ou fazer push não reconstrói uma imagem nem publica uma nova versão do app.

## Verificações locais

```bash
python -m unittest discover -s guides/data-apps/first-batch -p 'test_*.py' -v
```

Os testes executam o programa como subprocesso e verificam quantidade de itens,
falha de configuração e prioridade do ambiente sobre `.env`.
