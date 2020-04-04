# online-carolapp

Carol App Boilerplate contains all the boilerplate you need to create a Carol App.

## Preparing the environment to run the application locally

* Check if your are running Python 3.6+ ``python --version``
* Install a virtualenv by running ``make venv``
* Activate your new Python Virtual Env: ``source .venv/bin/activate``
* Install all development required libs using: ``make dev``

## Running the application locally

You can run the online-carolapp Carol App in two ways

```shell
make run
```

Or your can use online-carolapp Carol App docker image to run your code locally

```shell
make docker_image
make docker_run_dev
```

These endpoints will be available for all Online Carol App:

<http://localhost:5000/statusz>
<http://localhost:5000/logs>
<http://localhost:5000/healthz>

Based on provided sample, these URLs will be available:

<http://localhost:5000/api/hello_world>
<http://localhost:5000/api/sum?a=1&b=2>

Example how to call the endpoint `sum` (curl):

```shell
curl -X POST \
  http://localhost:5000/api/sum \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: bd477bbd-d31d-5e85-1c67-7a2370a22f8e' \
  -d '{"a":"1","b":"2"}'
```

## Testing

This Carol App contains all libraries necessary to create and run tests.

All tests have to be hosted on test/ folder.

To run your test suite:

```shell
make test
```

To check the Carol App Test coverage:

```shell
make htmlcov
```

## CI/CD

This Carol App is ready to run in any [Buildkite](https://buildkite.com) pipeline. Check the [.buildkite/pipeline.yml](.buildkite/pipeline.yml)

## Running the application in Carol

You should create a Carol App and send the resource to Carol.

After deployed the Carol App and started the service, the final URL will follow this structure:

<http://wssp-online_carolapp-0-1-0-alg_online_carolapp/api/>

### Understanding the Carol App's URL in Carol

* `wssp`: Tenant name.
* `online_carolapp`: Carol app name.
* `0-1-0`: Carol app version. At the domain itt replaces `.` by `-`. On the path it keeps the `-`.
* `alg_online_carolapp`: Algorithm name.
* `api`: Fixed string, used to group the services provided by this carol app.

Ps.: in the near future, all requests will go through Carol (working as a proxy from external requests and the Carol App).

## Additional information

All Online Carol App is being deployed on Google Cloud Platform.

Both Carol App (Online/Batch) need [pyCarol](https://github.com/totvslabs/pyCarol).
Python 3 is required for both Carol App (Online/Batch).

To change the pyCarol version to use, change the requirements.txt file and the Dockerfile.

## Questions

Send a message on `#carol-feedback` on Slack.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Important, make sure to update tests as appropriate.

## License

[Proprietary](LICENSE)
