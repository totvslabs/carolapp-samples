# operator

First a [GitHub token](https://github.com/settings/tokens) is required
so the build can clone the repository for the build. This will be stored
over the `GHTOKEN` environment variable.

The other required environment variable is the `TOKEN` that is the token used
to authorize the request to the operator in order to create a valid build
task _(you can request the token to devops team)_.

The default environment/project for this task is production (`labs-ai-apps-production`),
but if you want to create a build task for explore, just configure the enviromment variable
`ENVIRONMENT`. For explore and QA the values are `labs-ai-apps-explore` and `labs-qa-mdm`.

If you change the environment, the operator host is also different. Below the host for each
environment:

- **api.operator.carol.ai** _(production, also the default)_;
- **api.operator.karol.ai** _(explore)_;
- **api.operator.qarol.ai** _(qa)_;

`envsubst`, `make` and `curl` are the utils required to perform this task.

To start a task build, just call the `make` as the example:

```sh
make -e GHTOKEN=<github token> -e TOKEN=<operator token> -e ENVIRONMENT=<env> -e OPERATOR=<endpoint> build
{"status_url":"/api/builds/build/clockin-face-recognition/2bf7f586"}
```

To get the current state of the build, just call:

```sh
make -e TOKEN=<operator token> -e ID=2bf7f586 get
{"status":"Running","start_time":"2019-07-05T18:24:48Z"}
```

After the build is finished, or in an error state, you can delete the task with:

```sh
make -e TOKEN=<operator token> -e ID=2bf7f586 delete
```

The logs are avaliable over the Google Stackdriver of the related environment/project.
