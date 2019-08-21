from functools import wraps
from pycarol.carol import Carol
from pycarol.auth.PwdAuth import PwdAuth
from flask import session

import os

from flask_login import UserMixin
from .extensions import login

import requests


@login.user_loader
def load_user(id):
    headers = {'accept': 'application/json'}
    #TODO remove here
    os.environ['CAROLTENANT'] = 'espacolaser'
    if not os.environ.get('CAROLTENANT'):
        return
    resp = requests.request(method='GET',
                            url=f"https://{os.environ['CAROLTENANT']}.carol.ai/api/v2/oauth2/token/"+id,
                            headers=headers)

    if resp.ok:
        caroluser = CarolUser(id)
        return caroluser
    else:
        return None


def carol_login(tenant="", username="", password=""):
    try:
        login_carol = Carol(domain=tenant,
                              app_name='',
                              auth=PwdAuth(username, password))

        token = login_carol.auth.get_access_token()


        api_token = login_carol.issue_api_key()

        os.environ['CAROLAPPOAUTH'] = api_token['X-Auth-Key']
        os.environ['CAROLCONNECTORID'] = api_token['X-Auth-ConnectorId']
        os.environ['CAROLTENANT'] = tenant
        os.environ['CAROLAPPNAME'] = 'espacolaser'
        os.environ['CAROLAPPVERSION'] = '1.0.0'


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
                            url=f"https://{os.environ['CAROLTENANT']}.carol.ai/api/v2/oauth2/logout",
                            headers=headers,
                            params=params)


class CarolUser(UserMixin):
    def __init__(self, id):
        super().__init__()
        self.id = id
