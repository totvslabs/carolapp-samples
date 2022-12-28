from flask import Blueprint, redirect, render_template, request, url_for
from flask_login import current_user, login_required, login_user, logout_user

from werkzeug.urls import url_parse

from .forms import LoginForm
from .carol_login import carol_login, CarolUser, carol_logout

server_bp = Blueprint('main', __name__)


@server_bp.route('/')
@login_required
def index():
    dash_root = "https://" + request.url.replace("http://", "").split("/")[0] + "/dashboard/"
    return redirect(dash_root)


@server_bp.route('/login', methods=['GET', 'POST'])
def login():
    print(url_for("main.index"))
    print(request.url)
    if current_user.is_authenticated:
        https_root = "https://" + request.url.replace("http://", "").split("/")[0] + "/"
        return redirect(https_root)

    form = LoginForm()
    if form.validate_on_submit():

        token = carol_login(username=form.username.data, password=form.password.data)

        if form.username.data is None or \
                form.password.data is None or \
                token is None:

            error = 'Invalid tenant, username or password'
            return render_template('login.html', form=form, error=error)
        else:
            user = CarolUser(token)

        login_user(user.id, remember=form.remember_me.data)
        next_page = "https://" + request.url.replace("http://", "").split("/")[0] + "/dashboard/"
        return redirect(next_page)

    return render_template('login.html', title='Sign In', form=form)


@server_bp.route('/logout')
@login_required
def logout():
    carol_logout(current_user.id)
    logout_user()

    https_root = "https://" + request.url.replace("http://", "").split("/")[0] + "/"
    return redirect(https_root)


