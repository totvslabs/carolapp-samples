from functools import wraps
from pycarol.carol import Carol
from pycarol import PwdAuth, Carol, PwdKeyAuth
from flask import session

from flask_login import UserMixin
from .extensions import login

import os
import requests

dict_environment = {'organization': os.getenv('CAROLORGANIZATION'),
                    'tenant': os.getenv('CAROLTENANT')}


@login.user_loader
def load_user(_id):
    headers = {'accept': 'application/json'}

    try:
        _login = Carol(
            organization=dict_environment['organization'],
            domain=dict_environment['tenant'],
            app_name=os.getenv('CAROLAPPNAME', ''),
            auth=PwdKeyAuth(_id)
        )
    except Exception as e:
        return None

    # _login.tenant ==
    current = _login.call_api('v1/admin/tenants/current')
    env_info = _login.tenant

    valid = (current['mdmId'] == env_info['mdmId']) and (current['mdmOrgId'] == env_info['mdmOrgId'])

    if valid:
        caroluser = CarolUser(_id)
        return caroluser
    else:
        return None


@login.request_loader
def load_user_from_request(request):
    api_key = request.headers.get('Authorization')
    if api_key:
        user = load_user(api_key)
        if user:
            return user

    return None


def carol_login(username, password):
    if dict_environment["organization"] == "":
        raise Exception("Please, configure the variable dict_environment on carol_login.py.")

    try:
        login_carol = Carol(
            organization=dict_environment["organization"],
            domain=dict_environment["tenant"],
            app_name='',
            auth=PwdAuth(username, password),
            connector_id='0a0829172fc2433c9aa26460c31b78f0'
        )

        token = login_carol.auth.get_access_token()

        return CarolUser(token)

    except Exception as e:
        print(e)
        return None


def carol_logout(_id):
    headers = {'accept': 'application/json',
               'Authorization': _id,
               'content-type': 'application/x-www-form-urlencoded'}

    params = {'access_token': _id}

    resp = requests.request(method='POST',
                            url=f'https://{dict_environment["organization"]}.carol.ai/api/v2/oauth2/logout',
                            headers=headers,
                            params=params)


class CarolUser(UserMixin):
    def __init__(self, _id):
        super().__init__()
        self.id = _id
