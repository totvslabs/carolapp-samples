Creating your own online Carol App
---
Add new endpoints to `routes.py`.

If necessary, add new html templates to `/app/templates`.

Add all additional installed packages to `requirements.txt`. 

Testing locally
---

Create a file named `.env`, paste the information below and fill each key with their values:

ENV_DOMAIN=carol.ai
CAROLTENANT=
CAROLORGANIZATION=
API_SUBDOMAIN=
CAROLAPPNAME=
CAROLAPPVERSION=
ALGORITHM_NAME=
CAROLAPPOAUTH=
CAROLCONNECTORID=
LONGTASKID=

Build the image

`make docker_image`

Run a container

`make docker_run`