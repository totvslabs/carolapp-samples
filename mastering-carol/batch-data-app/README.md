
Project folder
---

```
mastering-carol/batch-data-app/
```

Create venv
----

```
virtualenv batchdataapp
source batchdataapp/bin/activate
which python
pip3 install -r requirements.txt 
deactivate
```


Run locally
---

```
python3 main.py
```

Building the docker image locally
---

```
docker build -t batch-data-app:0.0.1 .
docker run batch-data-app:0.0.1
```
