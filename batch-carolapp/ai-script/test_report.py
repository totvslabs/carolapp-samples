import luigi
import os
import pycarol
import datetime
import random

import django
from django import template
from django.template.loader import get_template
from django.conf import settings

from pycarol import *
from pycarol.carol import *
from pycarol.tasks import *
from pycarol.query import *
from pycarol.auth.ApiKeyAuth import *
from pycarol.staging import *
from pycarol.connectors import Connectors
from pycarol.storage import Storage


namespace = 'main'
luigi.namespace(namespace)

class runMe(luigi.WrapperTask):
    def requires(self):
        print(">>>>> RUNNING THE METHOD REQUIRES")
        return execution()

class execution(luigi.Task):
    print(">>>>> RUNNING THE METHOD EXECUTION")
    finished = False
    def run(self):
        print(">>>>> RUNNING THE METHOD RUN INSIDE EXECUTION")
        osvarslist = ['FILENAME','FUNCTIONNAME','WORKERS','CAROLUSERNAME','CAROLPASSWORD','CAROLDOMAIN','CAROLCONNECTORID','CAROLAPPNAME','CAROLAPPVERSION','CAROLAPPOAUTH','REQUIREMENTS','URL','FILEPATH','BRANCHNAME','PYCAROL','LOGIN','DEBUG','RESULTSPATH','RAWPATH','SENTPATH']

        apiAuth = ApiKeyAuth(api_key = os.environ['CAROLAPPOAUTH'])
        connectorId = os.environ['CAROLCONNECTORID']

        print("ConnectorID: ", connectorId)
        print("API Token: ", apiAuth)
        carol_instance = Carol(os.environ['CAROLTENANT'], 'batchapp20190117', apiAuth, connector_id=connectorId)

        #TODO:
        #download de settings.

        tasks = Tasks(carol_instance)
        if(os.environ['LONGTASKID'] != "TBD"):
            task = tasks.get_task(os.environ['LONGTASKID'])
            task.set_progress(50)

        connectors = Connectors(carol_instance)
        connector = connectors.get_by_name("carolml")

        print(">>>>> RESPONSE HERE: ")
        print(connector['mdmId'])

        # from .commons import *

        report_template = "report-template.html"
        notebook = 'test-jupyter-notebook.ipynb'
        notebook_result = "test.html"
        file_name = "report-sample.html"

        try:
            os.remove(file_name);
        except Exception as e:
            print("File not found")

        try:
            os.remove(notebook_result);
        except Exception as e:
            print("File not found")

        os.system(
            'jupyter nbconvert --execute ' + notebook +
            ' --to html --output ./' + notebook_result +
            ' --ExecutePreprocessor.timeout=180 --ExecutePreprocessor.kernel_name=python3'
        )

        f = open(notebook_result, "r")
        jupyter_notebook_content = f.read()

        settings.configure(TEMPLATES=[
            {
                'BACKEND': 'django.template.backends.django.DjangoTemplates',
                'DIRS': ['.'], #if you want the templates from a file
                'APP_DIRS': False,
            },
        ])

        django.setup()

        template = get_template(report_template)
        content_report = template.render({'name': "Robson Poffo", "content": jupyter_notebook_content})

        f = open(file_name, "a")
        f.write(content_report)
        f.close()

        directory = "reports/"
        Storage(carol_instance).save(directory+file_name, obj=file_name, format='file')

        if(os.environ['LONGTASKID'] != "TBD"):
            task.add_log(log_message="Everything went well.", log_level="INFO")
            task.set_progress(100)

        self.finished = True

    def complete(self):
        print(">>>>> RUNNING THE METHOD COMPLETE INSIDE EXECUTION")
        return self.finished

if __name__ == '__main__':
    luigi.run()
