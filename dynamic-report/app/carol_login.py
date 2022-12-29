from dotenv import load_dotenv
from flask_login import UserMixin
from pycarol import Carol
from pycarol.auth.PwdAuth import PwdAuth
import requests

from .extensions import login


@login.user_loader
def load_user(id):
    print(id)
    headers = {"accept": "application/json"}

    load_dotenv()
    carol = Carol()
    url = f"https://{carol.organization}.carol.ai/api/v2/oauth2/token/{id}"
    resp = requests.request(method="GET", url=url, headers=headers)

    if resp.ok:
        caroluser = CarolUser(id)
        return caroluser
    return None


def carol_login(username, password):
    load_dotenv()
    carol = Carol()
    if carol.organization == "":
        raise Exception(
            "Please, configure the variable CAROLORGANIZATION in your .env file."
        )

    try:
        login_carol = Carol(
            organization=carol.organization,
            domain=carol.tenant["mdmName"],
            app_name="",
            auth=PwdAuth(username, password),
            connector_id="0a0829172fc2433c9aa26460c31b78f0",
        )

        token = login_carol.auth.get_access_token()

        return CarolUser(token)

    except Exception as e:
        print(e)
        return None


def carol_logout(id):
    headers = {
        "accept": "application/json",
        "Authorization": id,
        "content-type": "application/x-www-form-urlencoded",
    }

    params = {"access_token": id}

    load_dotenv()
    carol = Carol()
    url = f"https://{carol.organization}.carol.ai/api/v2/oauth2/logout"
    requests.request(method="POST", url=url, headers=headers, params=params)


class CarolUser(UserMixin):
    def __init__(self, id):
        super().__init__()
        self.id = id
