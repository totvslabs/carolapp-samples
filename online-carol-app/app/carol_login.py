from functools import wraps
from pycarol.carol import Carol
from pycarol.auth.PwdAuth import PwdAuth
from flask import session

from flask_login import UserMixin
from .extensions import login

import os
import requests

dict_environment = {'organization': os.getenv('CAROLORGANIZATION'),
                    'tenant': os.getenv('CAROLTENANT')}

@login.user_loader
def load_user(id):
    print(id)
    headers = {'accept': 'application/json'}

    resp = requests.request(method='GET', url=f'https://{dict_environment["organization"]}.carol.ai/api/v2/oauth2/token/'+id, headers=headers)

    if resp.ok:
        caroluser = CarolUser(id)
        return caroluser
    else:
        return None

@login.request_loader
def load_user_from_request(request):

    api_key = request.headers.get('Authorization')
    print(api_key)
    if api_key:
        #api_key = api_key.replace('Basic ', '', 1)
        #try:
            #api_key = base64.b64decode(api_key)
        #except TypeError:
        #    pass
        user = load_user(api_key)
        if user:
            return user

    return None


def carol_login(username, password):
    if dict_environment["organization"] == "":
        raise Exception("Please, configure the variable dict_environment on carol_login.py.")

    try:
        login_carol = Carol(organization=dict_environment["organization"],
                  domain=dict_environment["tenant"],
                  app_name='',
                  auth=PwdAuth(username, password),
                  connector_id='0a0829172fc2433c9aa26460c31b78f0')

        token = login_carol.auth.get_access_token()

        return CarolUser(token)

    except Exception as e:
        print(e)
        return None

def carol_logout(id):
    headers = {'accept': 'application/json',
               'Authorization': id,
               'content-type': 'application/x-www-form-urlencoded'}

    params = {'access_token': id}

    resp = requests.request(method='POST',
                            url=f'https://{dict_environment["organization"]}.carol.ai/api/v2/oauth2/logout',
                            headers=headers,
                            params=params)


class CarolUser(UserMixin):
    def __init__(self, id):
        super().__init__()
        self.id = id
