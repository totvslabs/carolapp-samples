from flask import Blueprint
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from flask_login import current_user
from flask_login import login_required
from flask_login import login_user
from flask_login import logout_user
from flask import send_from_directory
import os
from werkzeug.urls import url_parse
from .forms import LoginForm
from .carol_login import carol_login, CarolUser, carol_logout
import pandas as pd

server_bp = Blueprint('main', __name__)
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))


@server_bp.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


@server_bp.route('/')
@login_required
def index():
    return redirect('/home')


@server_bp.route('/home', methods=['GET', 'POST'])
def home():
    return render_template('home.html')  #, form=form, error=error)


@server_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))

    form = LoginForm()
    if form.validate_on_submit():

        token = carol_login(tenant=form.tenant.data,
                            username=form.username.data,
                            password=form.password.data)

        if form.username.data is None or \
                form.password.data is None or \
                form.tenant.data is None or \
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


@server_bp.route('/getChurnDataInCSV')
@login_required
def getChurnDataInCSV():
    print('[INFO] loading csv from server')

    # TODO - this will be replaced by your own dataFrame/csv churn stuff...
    # the csv used for this example (charts guilherme/gabriel Google sheet) is available at https://docs.google.com/spreadsheets/d/1rBdAEj6lWwDellcbERD3Zx23sbUmA6PDmktYuoJ68a0/edit?usp=sharing
    data = pd.read_csv(os.path.join(__location__, 'static/data/churn2.csv'))

    return data.to_csv()
