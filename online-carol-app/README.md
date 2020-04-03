Creating your own online Web Carol App
---
Add new routes to `routes.py`.

If necessary, add new HTML templates to `/app/templates`.

Adding the annotation `@login_required` to the route means that the user will be redirected to `login.html` for logging to Carol if not authenticated.

Add all additional installed packages to `requirements.txt`. 


Creating your own online Web Carol API
---
Add new endpoints to `routes.py`.

Adding the annotation `@login_required` to the route means that a Carol authentication token must be sent in request's header in the format `"Authorization: {TOKEN}"`, otherwise the request will not be authorized.

Add all additional installed packages to `requirements.txt`. 


Testing locally
---

Create a file named `.env`, paste the information below and fill each key with their values:

```
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
```

Build the image

```
make docker_image
``` 

Run a container

```
make docker_run
```