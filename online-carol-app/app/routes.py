import logging
from flask import Blueprint, current_app, flash, jsonify, request, redirect, render_template, url_for
from flask_login import current_user, login_required, login_user, logout_user
from werkzeug.urls import url_parse
from .carol_login import carol_login, CarolUser, carol_logout
from .forms import LoginForm

# Logger
logger = logging.getLogger(__name__)
console = logging.StreamHandler()
console.setLevel(logging.DEBUG)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter("%(levelname)s: %(message)s")
console.setFormatter(formatter)
logger.addHandler(console)

server_bp = Blueprint('main', __name__)

@server_bp.route('/')
@login_required
def index():
    return render_template('main.html')


@server_bp.route('/hello_world', methods=['GET'])
@login_required
def hello_world():
    message = {
        'message': 'Hello World'
    }
    return jsonify(message)


@server_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))

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
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('main.index')
        return redirect(next_page)

    return render_template('login.html', title='Sign In', form=form)


@server_bp.route('/logout')
@login_required
def logout():
    carol_logout(current_user.id)
    logout_user()

    return redirect(url_for('main.index'))
