# Import necessary libraries
import pandas as pd

from google.cloud import bigquery
from google.oauth2 import service_account

from dotenv import load_dotenv
from pycarol.apps import Apps
from pycarol.bigquery import TokenManager
from pycarol import Carol

load_dotenv(".env")

carol = Carol()
tokenManager = TokenManager(carol, None, False)

tokenGcp = tokenManager.get_token()
credentials = service_account.Credentials.from_service_account_info(tokenGcp.to_dict()['service_account'])
client = bigquery.Client(credentials=credentials)

envId = tokenGcp.to_dict()['env']['env_id']
projectId = tokenGcp.to_dict()['service_account']['project_id']

sql_query = f'''
        #standardSQL
        CREATE OR REPLACE MODEL `{projectId}.{envId}.sample_model`
        OPTIONS(model_type='logistic_reg') AS
        SELECT
          IF(totals.transactions IS NULL, 0, 1) AS label,
          IFNULL(device.operatingSystem, "") AS os,
          device.isMobile AS is_mobile,
          IFNULL(geoNetwork.country, "") AS country,
          IFNULL(totals.pageviews, 0) AS pageviews
        FROM
          `bigquery-public-data.google_analytics_sample.ga_sessions_*`
        WHERE
          _TABLE_SUFFIX BETWEEN '20160801' AND '20170630'
'''

dataJob = client.query(sql_query)

print(dataJob)

print('done query')

print(len(dataJob.to_dataframe()))

print('done')