import logging
import os
from flask import Blueprint, jsonify
from pycarol import Carol
from pycarol.bigquery import BQ

# Logger
logger = logging.getLogger(__name__)
console = logging.StreamHandler()
console.setLevel(logging.DEBUG)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter("%(levelname)s: %(message)s")
console.setFormatter(formatter)
logger.addHandler(console)

server_bp = Blueprint('main', __name__)


@server_bp.route('/', methods=['GET'])
def ping():
    return jsonify('App is running. Send a request to /get_nlp_product.')


@server_bp.route('/get_nlp_product', methods=['GET'])
def named_query():
    logger.info('Request received')
    login = Carol(environment=os.environ['ENV_DOMAIN'])
    logger.info(login.get_current())
    
    sql = """SELECT * FROM stg_nlp_product"""

    bq = BQ(login)
    response_df = bq.query(sql)
    logger.info(f'There are {len(response_df)} records in staging product from connector nlp in BigQuery')
    return response_df.to_dict('records')
