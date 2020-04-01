Preparing the environment to run the application locally
---

Create the environment variables (`sintax for linux/mac`):

```
export CAROLTENANT=wssp
export CAROLAPPNAME=appdemo
export LONGTASKID=e89641b0e9s76d7sa6ds87010a801002
```

The `LONGTASKID` can be any task id found in the activity manager page in Carol.

Go to Carol, get the `connector ID` the application will send data to. In the provided application, 
it's being considered the connector `carolml`. Inside Carol, for the connector the application will send data, 
generate the `Connector Token`. With the connector token in hands, create this new environment variable:

```
export CAROLCONNECTORID=e89641b0e91011e8aec042010a801002
export CAROLAPPOAUTH=d5f358e0b30a11e8a0caca8943f25e25
```

Ps.: 
- `e89641b0e91011e8aec042010a801002` is the `Connector ID` I got from Connector's page.
- `d5f358e0b30a11e8a0caca8943f25e25` is the `Connector Token` I generated on my side.


Running the application locally
---

Create a virtualenv:

```
python3 -m venv myapp
source myapp/bin/activate
pip install -r requirement.txt
```

Deactivate a virtualenv:
```
deactivate
```