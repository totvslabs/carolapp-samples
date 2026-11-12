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

O servidor escuta em `0.0.0.0:8080`, como declarado em `properties.port`. A rota `/healthz` responde sem credenciais para a verificação interna da plataforma. `EXPOSE` documenta a porta; quem define o encaminhamento é o manifesto.

Use a URL fornecida pela interface para acessar o serviço. O controle de acesso externo depende da plataforma; este exemplo não cria login próprio nem recebe dados reais. O pyCarol não é necessário para responder HTTP; pode ser adicionado quando a rotina precisar acessar recursos da tenant.

Alterar `GREETING` no manifesto requer reenviá-lo e reiniciar o processo para ler o novo valor. Alterar código, dependências ou Dockerfile requer novo build. O processo online permanece ativo até ser parado, diferentemente do batch. Ao terminar o teste, use **Stop** para interromper a execução e o consumo correspondente.

Neste repositório, a branch principal é `master`; o manifesto aponta para ela. Não altere o campo de branch no modal: use o valor carregado do manifesto.

## Validação

```bash
python -m unittest -v
```

Os testes iniciam o servidor Gunicorn real e consultam as rotas por HTTP.

Referências: [Flask](https://flask.palletsprojects.com/), [Gunicorn](https://gunicorn.org/), [Online App](https://docs.carol.ai/docs/carol-app/Batch-Online/online-app).
