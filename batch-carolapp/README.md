Preparing the environment to run the application locally
---

Create the environment variables (`sintax for Mac`):

```
export CAROLTENANT=wssp
export CAROLAPPNAME=appdemo
export LONGTASKID=TBD
```

The `LONGTASKID` will not be considered since its value is `TBD` (take a look at the source code to see how it is being handled).

Go to Carol, get the `connector ID` the application will send data to. In the provided application, it's being considered the connector `carolml`. Inside Carol, for the connector the application will send data, generate the `Connector Token`. With the connector token in hands, create this new environment variable:

```
export CAROLCONNECTORID=e89641b0e91011e8aec042010a801002
export CAROLAPPOAUTH=d5f358e0b30a11e8a0caca8943f25e25
```

Ps.: 
- `e89641b0e91011e8aec042010a801002` is the `Connector ID` I got from Connector's page.
- `d5f358e0b30a11e8a0caca8943f25e25` is the `Connector Token` I generated on my side.


Running the application locally
---

Create a virtualenv based on the `requirements.yml` file:

```
conda env create -f requirements.yml
```

Some useful commands related to conda and virtualenv:

Activate a specific virtualenv:
```
conda activate pycarol
```

Deactivate a virtualenv:
```
conda deactivate
```

List all virtualenv avaliable:
```
conda env list
```

After creating and activating the virtualenv, run the following command:

```
python3 -m luigi --module test_script main.runMe --local-scheduler
```


Running the application in Carol
---

To make the application compatible to Carol, you should replace the `connector ID` defined to run it locally to the default connector id: `0a0829172fc2433c9aa26460c31b78f0`

On the provided sampe, it's this line:

```
carol_instance = Carol(os.environ['CAROLTENANT'], 'myapp', apiAuth, connector_id='0a0829172fc2433c9aa26460c31b78f0')
```


Additional information
---

In case you want to keep the `AWS` instance, without destroying it after finishing the algorithm, change the manifest file setting the property `keepInstance` to true.

Both Carol App (Online/Batch) need pyCarol (https://github.com/totvslabs/pyCarol).


Questions?
---

Send a message on `#carol-feedback` on Slack.
