import dash
from flask import Flask
from flask.helpers import get_root_path
from flask_login import login_required
from app.extensions import login
from os.path import join, dirname, realpath

def create_app():
    UPLOAD_FOLDER = '/app/files'

    app = Flask(__name__)
    app.secret_key = "secret key"

    login.init_app(app)
    login.login_view = 'main.login'
    login.login_message = ""

    register_blueprints(app)

    return app


def register_blueprints(app):
    from .routes import server_bp

    app.register_blueprint(server_bp)
