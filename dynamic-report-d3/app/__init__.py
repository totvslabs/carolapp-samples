from flask import Flask
from flask.helpers import get_root_path
from flask_login import login_required
from .extensions import login

from config import BaseConfig
from os.path import join, dirname, realpath


def create_app():
    server = Flask(__name__)
    server.config.from_object(BaseConfig)



    login.init_app(server)
    login.login_view = 'main.login'

    register_blueprints(server)

    return server

def register_blueprints(server):
    from .webapp import server_bp

    server.register_blueprint(server_bp)
