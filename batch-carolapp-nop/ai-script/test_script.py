import os
import pycarol
import datetime
import random

from pycarol import *
from pycarol.carol import *
from pycarol.tasks import *
from pycarol.query import *
from pycarol.auth.ApiKeyAuth import *
from pycarol.staging import *
from pycarol.connectors import Connectors


def run():
	print(">>>>> RUNNING THE METHOD RUN INSIDE EXECUTION")

	apiAuth = ApiKeyAuth(api_key = os.environ['CAROLAPPOAUTH'])
	connectorId = os.environ['CAROLCONNECTORID']
	appName = os.environ['CAROLAPPNAME']

	print("Connecting to Carol...")
	carol_instance = Carol(os.environ['CAROLDOMAIN'], appName, apiAuth, connector_id=connectorId)

	print("Connected...")
	tasks = Tasks(carol_instance)
	if(os.environ['LONGTASKID'] != "TBD"):
		task = tasks.get_task(os.environ['LONGTASKID'])
		task.set_progress(50)

	print(f">>>>> HELLO WORLD! My Task ID is {os.environ['LONGTASKID']}")

	if(os.environ['LONGTASKID'] != "TBD"):
		task.add_log(log_message="Everything went well.", log_level="INFO")
		task.set_progress(100)

if __name__ == '__main__':
    print(">>>>> MAIN!")
    run()
