
Project folder
---

```
mastering-carol/online-data-app/
```

Install apps
---

```
pip install poetry
pip install goblet
pip install goblet-gcp
pip install pip-tools
```

Install new libs
---

```
poetry add libname
```

Generate requirements.txt
---

```
pip-compile
```


Create venv
----

```
virtualenv venvllm
source venvllm/bin/activate
which python
pip3 install -r requirements.txt 
deactivate
```


Deploy local
---

```
goblet local -p 8180
```


Deploy GCP
---

```
gcloud auth application-default login
goblet deploy -l us-central1
```


Testing
---

```

pip3 install lark --upgrade
pip3 install langchain --upgrade
pip3 install tabulate --upgrade
pip3 install -U google-cloud-aiplatform "shapely<2"
pip3 install geopandas
pip3 install rtree
pip3 install pygeos



curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: this-is-official" \
    -d '{"q": "quantos registros?"}' \
  'http://localhost:8180/api'


curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: this-is-official" \
    -d '{"q": "quantos tipos de transações possui cadastrado?"}' \
  'http://localhost:8180/api'

curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: this-is-official" \
    -d '{"q": "quais os três tipos de transações com mais registros e quantos registros possuem?"}' \
  'http://localhost:8180/api'

curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: this-is-official" \
    -d '{"q": "quantos registros?"}' \
  'https://techfinsql-llmbotsample.apps.carol.ai/api'

curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: this-is-official" \
    -d '{"q": "quantos registros?"}' \
  'https://techfinsql-llmbotsample.apps.carol.ai/api'

```


Docker Image
---

I removed these dependencies from pyproject.toml file.

goblet-gcp = "^0.11.1"
google-cloud-aiplatform = "^1.26.0"


```
docker build -t llmbot .
docker run -p 8080:80 llmbot
```