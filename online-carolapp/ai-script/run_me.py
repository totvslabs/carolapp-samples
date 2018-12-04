import sys
import json
import numpy as np
import luigi
import random

from pycarol.app.online import Online
from pycarol.app.online_api import OnlineApi

online = Online()

@online.route("hello_world")
def hello_world(args):
    message = {
        'message': 'Hello World'
    }
    return message

@online.route("predict")
def predict(args):
    result = {
        'score': random.randint(1,9)
    }
    return result

@online.route("sum")
def sum(request):
    total = 0;
    print(request)

# this sample is partially commented - waiting the pyCarol docker image be fixed (this version make possible read GET variables - for now, handle it through POST).
#    param = request.values

# this is the way pycarol 2.2 sends param (only supporting POST params)
    param = request

    if(param != None):
        for key in param:
            try:
                total += float(param[key])
            except RuntimeError:
                pass

    result = {
        'sum': total
    }
    return result

#To run the application locally, uncomment the next line
#flask = OnlineApi('run_me').get_api()

