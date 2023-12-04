import logging
import time
import datetime
import os
import pandas as pd
import json

from google.cloud import bigquery

from langchain.llms import OpenAI
from TOTVSAgent import create_TOTVS_agent

from goblet import Goblet, jsonify, Response, goblet_entrypoint

from dotenv import load_dotenv
from pycarol.apps import Apps
from pycarol import Carol

load_dotenv(".env")

logging.info('Before initializing Carol instance!')

carol = Carol()
app = Apps(carol)
settings = app.get_settings()

if not os.path.exists(os.environ["GOOGLE_APPLICATION_CREDENTIALS"]):
    service_account = settings['g_serviceaccount']
    with open(os.environ["GOOGLE_APPLICATION_CREDENTIALS"], "w") as json_file:
        json.dump(json.loads(service_account), json_file, indent=4)
else:
    logging.info('using the standard file for Google SA.')

logging.info('Before starting the server!')

# Goblet App
# https://goblet.github.io/goblet/build/html/backends.html#cloudfunction
app = Goblet(function_name="mastering-carol", backend="cloudfunctionv2", cors=True)
app.log.setLevel(logging.DEBUG)
goblet_entrypoint(app)

app.log.info('Right after starting the server!')

def getData():
    client = bigquery.Client(project='carol-00b66d7bb91a4e43ae8e')

    sql_query = f'''
SELECT *
FROM `carol-00b66d7bb91a4e43ae8e.00b66d7bb91a4e43ae8e17649fb1a8fb.deduplicated_apinvoice`
'''

    df = client.query(sql_query).to_dataframe()
    app.log.info('done query')
    return df

def initializeAI(df):
    defaultPrompt = '''
Output:
- Print the output in Portugues/Brazil.
    '''

    app.log.info('Done Prompt Definition: ' + str(df.shape))
    return create_TOTVS_agent(OpenAI(temperature=0), df, verbose=False), defaultPrompt

@app.route("/api", methods=["POST"])
def api():
    start_time = time.time()

    request = app.current_request

    expected_header = 'Authorization'
    expected_value = 'this-is-official'

    if expected_header not in request.headers:
        return http_response(400, 'Missing {}'.format(expected_header))

    if request.headers.get(expected_header) != expected_value:
        return http_response(400, 'Invalid {} value'.format(expected_header))

    data = request.get_json()
    q = data.get('q')

    app.log.info('data: ' + str(data))
    app.log.info('q:' + str(q))

    df = getData()
    end_time_data = time.time()
    app.log.info('data loaded! Time to load data: ' + str((end_time_data - start_time)))

    agent,defaultPrompt = initializeAI(df)
    app.log.info('done initializing AI')

    question = f'''
{defaultPrompt}
Question:
{q}
'''

    agentResponse = agent.run(question)
    app.log.info('done getting the response')
    end_time = time.time()

    response = jsonify({"status": "OK", "q": q, "askedQuestion": question, "response": agentResponse, "elapsedTimeGetData": (end_time_data - start_time), "elapsedTime": (end_time - start_time), "now": datetime.datetime.now().isoformat()})
    return response

@app.route("/health", methods=["POST","GET"])
def health():
    start_time = time.time()
    end_time = time.time()
    response = jsonify({"status": "OK", "elapsedTime": (end_time - start_time), "now": datetime.datetime.now().isoformat()})
    return response

def http_response(response_code, description):
        return Response(
        {"httpCode": response_code, "message": description}, headers={"Content-Type": "application/json"}, status_code=response_code
    )
