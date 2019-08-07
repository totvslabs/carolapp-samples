import dash
from flask import Flask
from flask.helpers import get_root_path
from flask_login import login_required
from .extensions import login

from config import BaseConfig
from os.path import join, dirname, realpath

def create_app():
    server = Flask(__name__)
    server.config.from_object(BaseConfig)

    register_dashapps(server)

    login.init_app(server)
    login.login_view = 'main.login'

    register_blueprints(server)

    return server


def register_dashapps(app):
    #from .dashapp1.layout import layout
    #from .dashapp1.callbacks import register_callbacks
    from .dashapp.dash_visualization import layout
    from .dashapp.dash_visualization import register_callbacks
    
    # Meta tags for viewport responsiveness
    meta_viewport = {"name": "viewport", "content": "width=device-width, initial-scale=1, shrink-to-fit=no"}

    dashapp = dash.Dash(__name__,
                         server=app,
                         url_base_pathname='/dashboard/',
                         assets_folder=join(dirname(realpath(__file__)), 'static/'),
                         meta_tags=[meta_viewport])

    dashapp.title = 'Dashapp'
    dashapp.layout = layout
    register_callbacks(dashapp)
    _protect_dashviews(dashapp)


def _protect_dashviews(dashapp):
    for view_func in dashapp.server.view_functions:
        if view_func.startswith(dashapp.config.url_base_pathname):
            dashapp.server.view_functions[view_func] = login_required(dashapp.server.view_functions[view_func])


def register_blueprints(server):
    from .webapp import server_bp

    server.register_blueprint(server_bp)
