import os
import pycarol
import datetime
import random
import logging
import sys

from pycarol import *
from pycarol.carol import *
from pycarol.tasks import *
from pycarol.query import *
from pycarol.auth.ApiKeyAuth import *
from pycarol.staging import *
from pycarol.connectors import Connectors

print("Connecting to Carol...")
carol_instance = Carol(os.environ['CAROLDOMAIN'], os.environ['CAROLAPPNAME'], ApiKeyAuth(api_key = os.environ['CAROLAPPOAUTH']), connector_id=os.environ['CAROLCONNECTORID'], environment=os.environ['ENV_DOMAIN'])

carol_handler = CarolHandler(carol_instance)

stdout_handler = logging.StreamHandler(sys.stdout)
stdout_handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.addHandler(carol_handler)
logger.addHandler(stdout_handler)

tasks = Tasks(carol_instance)
task = tasks.get_task(os.environ['LONGTASKID'])

def run():
    logger.info('Running the method run...')

    task.set_progress(50)

    logger.warning('This is a warning message')
    logger.error('This is an error message')
    logger.critical('This is a critical message')

    logger.info('Completing the task...')

    task.set_progress(100)

run()
