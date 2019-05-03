Preparing the environment to run the application locally
---

No special preparation is needed.


Running the application locally
---

On the Python file with the endpoints (the one on the manifest file), uncomment the next line:

```
flask = OnlineApi('run_me').get_api()
```

The previous line is pointing the Python file that has the services.

After, run the following command to start the server:

```
gunicorn -w 1 -b :5000 run_me:flask
```

These endpoints will be available for all Online Carol App:

```
http://localhost:5000/statusz
http://localhost:5000/logs
http://localhost:5000/healthz
```

Based on provided sample, these URLs will be available:

```
http://localhost:5000/api/hello_world
http://localhost:5000/api/predict
http://localhost:5000/api/sum?a=1&b=2
```

Example how to call the endpoint `sum` (curl):

```
curl -X POST \
  http://localhost:5000/api/sum \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: bd477bbd-d31d-5e85-1c67-7a2370a22f8e' \
  -d '{"a":"1","b":"2"}'
```

Running the application in Carol
---

You should create a Carol App and send the resource to Carol.

After deployed the Carol App and started the service, the final URL will follow this structure:

```
http://wssp-sixthonlinecarolapp-1-0-0-sample/api/
```

Understanding the Carol App's URL in Carol
---

- `wssp`: Tenant name.
- `sixthonlinecarolapp`: Carol app name.
- `1-0-0`: Carol app version. At the domain itt replaces `.` by `-`. On the path it keeps the `-`.
- `sample`: Algorithm name.
- `api`: Fixed string, used to group the services provided by this carol app.

Ps.: in the near future, all requests will go through Carol (working as a proxy from external requests and the Carol App).


Additional information
---

All Online Carol App is being deployed on Google Cloud Platform.

If you want to migrate to a different pyCarol version, change the docker image:

- `ai/nlp_spacy:2.6.0`: it has the pyCarol version 2.6.
- `ai/nlp_spacy:2.4-online-request`: it has the pyCarol version 2.4 (`we are still making this docker image stable - use the previous one for now`).

Both Carol App (Online/Batch) need pyCarol (https://github.com/totvslabs/pyCarol).
Python 3 is required for both Carol App (Online/Batch).

Questions?
---

Send a message on `#carol-feedback` on Slack.
