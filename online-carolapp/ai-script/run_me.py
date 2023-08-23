import sys
import json
import numpy as np
import luigi
import random

from pycarol.app.online import Online
from pycarol.app.online_api import OnlineApi
from pycarol.app.online_api import request

online = Online()

accessToken = "VGhpcyBpcyBqdXN0IGEgdGVzdCwgbm90IGEgdmFsaWQgdG9rZW4gOikg"

@online.route("hello_world")
def hello_world():
    message = {
        'message': 'Hello World'
    }
    return message

@online.route("predict")
def predict():
    result = {
        'score': random.randint(1,9)
    }
    return result

@online.route("sum")
def sum():
    total = 0;
    print(request)

    param = request.values

    if (param != None):
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
application = OnlineApi('run_me').get_api()
