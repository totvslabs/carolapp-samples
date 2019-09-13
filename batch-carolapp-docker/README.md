# batch-carolapp-docker

This project contains one app: process.py.

Each one is responsible of part of the Clock in Caroll App processing.

# Project Structure
<pre>
.  
├<a href="#ai-script">ai-script</a>  
│   └──<a href="#manifestjson">manifest.json</a>  
├<a href="#app">app</a>  
│   ├──<a href="#processpy">process.py</a>  
├<a href="#operator">operator</a>  
│   ├──<a href="#makefile">Makefile</a>  
│   └──<a href="#specjson">spec.json</a>  
├<a href="#Dockerfile">Dockerfile</a>  
└<a href="#requirementstxt">requirements.txt</a>
</pre>

## ai-script
### manifest.json

This manifest contains the requirements to run the process app.

## app
On this folder we can find the scripts used on the Carol App.

### process.py
The processing script sends a "Hello World" log to the task using pyCarol.

## operator
The files on this folder are an interface for the GPC Operator API

### Makefile
The make file have three different methods to be called:
- build: Will build the Docker image and deploy it on GCP. E.g: <pre>make build -e TOKEN=<token> -e USER=<git_user> -e GHTOKEN=<git_token></pre>

### spec.json
The definition on the spec.json will identify wich resources are nedded to run the build machine.
