from pathlib import Path

import dash
from flask import Flask
from flask_login import login_required

from config import BaseConfig
from .dashapp.dash_visualization import layout
from .dashapp.dash_visualization import register_callbacks
from .extensions import login
from .webapp import server_bp


def create_app():
    server = Flask(__name__)
    server.config.from_object(BaseConfig)

    _register_dashapps(server)

    login.init_app(server)
    login.login_view = "main.login"

    server.register_blueprint(server_bp)

    return server


def _register_dashapps(app):
    # Meta tags for viewport responsiveness
    meta_viewport = {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, shrink-to-fit=no",
    }

    assets_folder = Path(__file__).parent / "static/"
    dashapp = dash.Dash(
        __name__,
        server=app,
        url_base_pathname="/dashboard/",
        assets_folder=assets_folder,
        meta_tags=[meta_viewport],
    )

    dashapp.title = "Dashapp"
    dashapp.layout = layout
    register_callbacks(dashapp)
    _protect_dashviews(dashapp)


def _protect_dashviews(dashapp):
    for view_func in dashapp.server.view_functions:
        if view_func.startswith(dashapp.config.url_base_pathname):
            dashapp.server.view_functions[view_func] = login_required(
                dashapp.server.view_functions[view_func]
            )
