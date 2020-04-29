import os
import sys
sys.path.append('./pyCarol')

from pycarol.auth.ApiKeyAuth import ApiKeyAuth
from pycarol.carol import Carol
from pycarol.apps import Apps
from pycarol.tasks import Tasks

class docker_environ_vars():

    def __init__(self):
        self.caroldomain = ''
        self.caroltenant = ''
        self.carolappoauth = ''
        self.carolconnectorir = ''
        self.longtaskid = ''

    def docker_enviroment_variables_validation(self):
        fault_vars = []

        if 'CAROLDOMAIN' not in os.environ:
            fault_vars.append('CAROLDOMAIN')
        if 'CAROLTENANT' not in os.environ:
            fault_vars.append('CAROLTENANT')
        if 'CAROLAPPOAUTH' not in os.environ:
            fault_vars.append('CAROLAPPOAUTH')
        if 'CAROLCONNECTORID' not in os.environ:
            fault_vars.append('CAROLCONNECTORID')
        if 'LONGTASKID' not in os.environ:
            fault_vars.append('LONGTASKID')
        if 'ENV_DOMAIN' not in os.environ:
            fault_vars.append('ENV_DOMAIN')

        if len(fault_vars) > 0:
            raise Exception('Some environment variable were not defined: ',fault_vars)

    def load_vars(self):
        self.docker_enviroment_variables_validation()
        self.caroldomain = os.environ['CAROLDOMAIN']
        self.caroltenant = os.environ['CAROLTENANT']
        self.carolappoauth = os.environ['CAROLAPPOAUTH']
        self.carolconnectorir = os.environ['CAROLCONNECTORID']
        self.longtaskid = os.environ['LONGTASKID']
        self.environment = os.environ['ENV_DOMAIN']

print("-------------------------------")
print("STARTING ERROR REPORT")
print("-------------------------------")
env_vars = docker_environ_vars()
env_vars.load_vars()

carol = Carol(domain=env_vars.caroldomain,
              app_name='',
              auth=ApiKeyAuth(env_vars.carolappoauth),
              connector_id=env_vars.carolconnectorir,
              environment=env_vars.environment)

tasks = Tasks(carol)
task = tasks.get_task(env_vars.longtaskid)
if task.mdm_task_status != 'FAILED' or task.mdm_task_processing:
    task.add_log(log_message="Something went wrong.", log_level="ERROR")
    task.set_progress(100)
