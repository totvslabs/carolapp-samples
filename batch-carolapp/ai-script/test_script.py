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
	osvarslist = ['FILENAME','FUNCTIONNAME','WORKERS','CAROLUSERNAME','CAROLPASSWORD','CAROLDOMAIN','CAROLCONNECTORID','CAROLAPPNAME','CAROLAPPVERSION','CAROLAPPOAUTH','REQUIREMENTS','URL','FILEPATH','BRANCHNAME','PYCAROL','LOGIN','DEBUG','RESULTSPATH','RAWPATH','SENTPATH']

	apiAuth = ApiKeyAuth(api_key = os.environ['CAROLAPPOAUTH'])
	connectorId = os.environ['CAROLCONNECTORID']

	print("Connecting to Carol...")
	carol_instance = Carol(os.environ['CAROLDOMAIN'], 'myapp', apiAuth, connector_id=connectorId)

	print("Connected...")
	tasks = Tasks(carol_instance)
	if(os.environ['LONGTASKID'] != "TBD"):
		task = tasks.get_task(os.environ['LONGTASKID'])
		task.set_progress(50)

	for var in osvarslist:
		if var in os.environ:
			print(var, os.environ[var])

	connectors = Connectors(carol_instance)
	connector = connectors.get_by_name("carolml")

	print(">>>>> RESPONSE HERE: ")
	print(connector['mdmId'])

	query = Query(carol=carol_instance)
	data = query.all(dm_name="customer").go().results

	predictedData = list()

	print(">>>>> data read from carol: ")
	for row in data:
		print(row)
		predictedData.append({
			'date': datetime.now().replace(microsecond=0).isoformat(),
			'taxid': row['mdmtaxid'],
			'customercode': row['customercode'],
			'customername': row['customershortname'],
			'risk': (random.randint(1,9))/9
			})

	print(">>>>> data generated: ")
	for row in predictedData:
		print(row)

	sender = Staging(carol_instance)
	sender.send_data('prediction', data=predictedData, print_stats=True, auto_create_schema=False, crosswalk_auto_create=['date', 'taxid'], connector_id=connector['mdmId'])

	if(os.environ['LONGTASKID'] != "TBD"):
		task.add_log(log_message="Everything went well.", log_level="INFO")
		task.set_progress(100)

if __name__ == '__main__':
    print(">>>>> MAIN!")
    run()
