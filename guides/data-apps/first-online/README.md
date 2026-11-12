# Executando um app online

API Python com Flask e Gunicorn. Recebe requisições HTTP, responde e permanece disponível. Não acessa dados da tenant.

| Rota | Resposta |
|---|---|
| `GET /` | `200` com a mensagem configurada em `GREETING` |
| `GET /healthz` | `200` com `{"status": "ok"}` |
| Rota inexistente | `404` com `{"error": "not_found"}` |

## Teste local

O exemplo usa Python 3.14. A partir da raiz do repositório:

```bash
cd guides/data-apps/first-online
python3.14 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
gunicorn --config gunicorn.conf.py app:app
```

Abra `http://localhost:8080/` e `http://localhost:8080/healthz` no navegador. Encerre com `Ctrl+C`.

Para alterar a mensagem local:

```bash
GREETING="Olá, guia online!" gunicorn --config gunicorn.conf.py app:app
```

## Docker local

Com Docker em execução, na pasta do exemplo:

```bash
docker build -t guide-online:1.0.0 .
docker run --rm --name guide-online -p 8080:8080 guide-online:1.0.0
```

A porta à esquerda de `-p` é a da sua máquina; a da direita é a do contêiner. Use as mesmas URLs do teste local. Encerre com `Ctrl+C`.

## Plataforma

Crie um Data App separado na tenant de desenvolvimento. Envie `manifest.json`, construa `guide-online:1.0.0` e inicie `online_demo` em **Process**. Use **small ou medium no build**; a máquina de execução é definida separadamente no manifesto.

O servidor escuta em `0.0.0.0:8080`, como declarado em `properties.port`. **O healthcheck é obrigatório:** a plataforma valida a rota `/healthz`, que deve existir e responder HTTP 200 sem credenciais internas. O caminho configurado em `healthcheck.path` precisa corresponder à rota implementada. `EXPOSE` documenta a porta; quem define o encaminhamento é o manifesto.

O manifesto usa **`c1.pico` (0,25 vCPU e 250 MiB)**, uma réplica e escala automática desabilitada. O exemplo foi iniciado e validado nessa máquina na plataforma: `/` respondeu à mensagem configurada e `/healthz` retornou HTTP 200. Dimensione os recursos conforme a carga da sua API.

O tipo de máquina define o preço por hora. Use a [calculadora da plataforma com uma pico por 720 horas](https://docs.carol.ai/calculator#e=carol-app-c1-pico=720): uma réplica ligada 24 horas por dia, por 30 dias. Ajuste horas e réplicas ao seu uso. A máquina do build é uma alocação separada.

Use a URL fornecida pela interface para acessar o serviço. O controle de acesso externo depende da plataforma; este exemplo não cria login próprio nem recebe dados reais. O pyCarol não é necessário para responder HTTP; pode ser adicionado quando a rotina precisar acessar recursos da tenant.

Alterar `GREETING` no manifesto requer reenviá-lo e reiniciar o processo para ler o novo valor. Alterar código, dependências ou Dockerfile requer novo build. O processo online permanece ativo até ser parado, diferentemente do batch. Ao terminar o teste, use **Stop** para interromper a execução e o consumo correspondente.

Neste repositório, a branch principal é `master`; o manifesto aponta para ela. Não altere o campo de branch no modal: use o valor carregado do manifesto.

## Variáveis, Settings e secrets

| Opção | Uso |
|---|---|
| Ambiente local | `GREETING="Olá, guia online!" gunicorn --config gunicorn.conf.py app:app` |
| `.env` | Não é carregado automaticamente pelo exemplo; no Docker local, use `--env-file .env`. Mantenha o arquivo fora do Git e da imagem |
| Dockerfile `ENV` | Padrões da imagem, como `PORT` e `LOG_LEVEL` |
| Docker `-e` / manifesto `environments` | Valores de execução que substituem os padrões da imagem |
| Settings | Parâmetros do app consultados pela API; não viram variáveis de ambiente automaticamente |
| Secrets | Credenciais configuradas pelo fluxo de suporte da plataforma |

Para usar Settings, adicione o [pyCarol](https://github.com/totvslabs/pyCarol) e faça a leitura com `Apps(Carol()).get_settings()`. `Carol()` usa o contexto configurado; o [guia batch](https://docs.carol.ai/docs/guides/data-apps/first-batch#passo1) explica o teste local com API Key. A API HTTP deste exemplo não usa o SDK nem lê Settings.

Para solicitar secrets, abra o [formulário da plataforma](https://docs.google.com/forms/d/e/1FAIpQLScyz4lvJBcDJqsZea7GOr_FR8YAUPDFRGO5PyzFGsYg79xPug/viewform?usp=dialog), selecione **Quero reportar um tema que não consta em nenhuma das opções anteriores** e informe organização, tenant e app.

Não inclua credenciais no Git, no manifesto ou em `ENV`/`ARG` do Dockerfile. Um campo mascarado em Settings não equivale por si só a um gerenciador de secrets. Preserve o contexto fornecido pela plataforma e não imprima todas as variáveis ou Settings nos logs. Em produção, use apenas dados e credenciais produtivos.

## Validação

```bash
python -m unittest -v
```

Os testes iniciam o servidor Gunicorn real e consultam as rotas por HTTP.

Referências: [Flask](https://flask.palletsprojects.com/), [Gunicorn](https://gunicorn.org/), [Online App](https://docs.carol.ai/docs/carol-app/Batch-Online/online-app).
