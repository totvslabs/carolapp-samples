import os

from flask import Blueprint, redirect, render_template, request
from flask_login import current_user, login_user, logout_user

from .forms import LoginForm
from .carol_login import carol_login, CarolUser, carol_logout

server_bp = Blueprint("main", __name__)


@server_bp.route("/", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(_https_redirect("/dashboard/"))

    form = LoginForm()
    if form.validate_on_submit():

        token = carol_login(username=form.username.data, password=form.password.data)

        if form.username.data is None or form.password.data is None or token is None:

            error = "Invalid tenant, username or password"
            return render_template("login.html", form=form, error=error)

        user = CarolUser(token)

        login_user(user.id, remember=form.remember_me.data)
        return redirect(_https_redirect("/dashboard/"))

    return render_template("login.html", title="Sign In", form=form)


@server_bp.route("/logout")
def logout():
    if not current_user.is_authenticated:
        return redirect(_https_redirect("/login/"))

    carol_logout(current_user.id)
    logout_user()

    return redirect(_https_redirect("/"))


def _https_redirect(endpoint: str) -> str:
    local_run = os.environ.get("FORCE_HTTP", False)
    if local_run is not False:
        local_run = True if local_run == "True" else False

    protocol = "http://" if local_run is True else "https://"
    url = request.url.replace("http://", "").split("/")[0]
    return f"{protocol}{url}{endpoint}"
