If running locally (for dev purposes), add an .env file with the following contents:

```
CAROLAPPNAME=
CAROLTENANT=
CAROLORGANIZATION=
CAROLAPPOAUTH=
CAROLCONNECTORID=
FORCE_HTTP=True
```
Please fill the values accordingly (refer to pycarol docs). When running on Carol, this
variables will be injected automatically.

The variable FORCE_HTTP when present and set to True, all routes are automatically forced
to http, otherwise all redirects are to https.