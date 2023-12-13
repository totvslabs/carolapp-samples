# Import necessary libraries
import pandas as pd

from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

import matplotlib.pyplot as plt
import numpy as np

import logging

from google.cloud import bigquery
from dotenv import load_dotenv
from pycarol.apps import Apps
from pycarol import Carol, Staging

load_dotenv(".env")

carol = Carol()
app = Apps(carol)

client = bigquery.Client(project='carol-00b66d7bb91a4e43ae8e')

sql_query = f'''
SELECT *
FROM `carol-00b66d7bb91a4e43ae8e.00b66d7bb91a4e43ae8e17649fb1a8fb.deduplicated_apinvoice`
WHERE businesspartner_id in ('fa426a07b9b70daaedbd7c85fd53901c', 'fd2b7dbe63b9cfc558eca54f494db2c2', '34517bc4d98a89f6b76a7d2b7333c170')
'''

invoice_data = client.query(sql_query).to_dataframe()

print('done query')

sql_query = f'''
SELECT *
FROM `carol-00b66d7bb91a4e43ae8e.00b66d7bb91a4e43ae8e17649fb1a8fb.deduplicated_mdbusinesspartner`
WHERE businesspartner_id in ('fa426a07b9b70daaedbd7c85fd53901c', 'fd2b7dbe63b9cfc558eca54f494db2c2', '34517bc4d98a89f6b76a7d2b7333c170')
'''

business_partner_data = client.query(sql_query).to_dataframe()


# Load data
# Assuming 'invoice_data' and 'business_partner_data' are your datasets
# invoice_data =  [{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"},{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"},{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"},{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"},{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"},{"mdmCounterForEntity":1701644667659000,"mdmStagingCounter":1686764750103000,"mdmId":"f4a29cd9e53f28522b76e556203660e6","mdmCreated":"2023-12-03T23:04:27Z","mdmLastUpdated":"2023-12-03T23:04:27Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"apinvoiceGolden","mdmSourceEntityNames":"[\"acc2746cd9fb4e34a720abde12ebdcd9_se2\"]","mdmStagingRecord":"\"136d2e5ef115fea77105a43ca5834731\"","mdmDeleted":"False","mdmTaskId":"7378fdf5bc8d48eb93c81c0e36e39c0b","_orgid":"b16261af106cc99d44fb5444f8e3e94d","businesspartner_id":"06b42bb56b001872efb786014c852ec1","docreference":"000014465","invoice_id":"7b24a1c8b04f12dae3993d10c00a0967","docissue":"2021-12-06T03:00:00Z","erp_id":"01|26||000014465|A00003|00|TX","protheus_id":"01|26||000014465|A00003|00|TX","transactiontype":"TX ","deleted":"False","mdmCounterForEntity__DATETIME__":"2023-12-03T23:04:27.659000Z","_ingestionDatetime":"2023-12-03T23:04:39.327413Z"}]
# business_partner_data = [{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"},{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"},{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"},{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"},{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"},{"mdmCounterForEntity":1701644377254000,"mdmStagingCounter":1686774129514000,"mdmId":"fa65321857b22b61c13a7ea2b6a2e55a","mdmCreated":"2023-12-03T22:59:37Z","mdmLastUpdated":"2023-12-03T22:59:37Z","mdmTenantId":"1006a2f641394fa39db7dc92f124f468","mdmEntityType":"mdbusinesspartnerGolden","mdmSourceEntityNames":"[\"265143047dd24060a9c045ca7a6a1ac6_sa2\"]","mdmStagingRecord":"\"30be7525d372d8c6fd9af8de99b9242d\"","mdmDeleted":"False","mdmTaskId":"e4a26aaedc6542538ce34e33bb0d37d8","_orgid":"00000000000191","businesspartner_id":"06b42bb56b001872efb786014c852ec1","alias":"PADRAO              ","addres_id":"b850db001ade1a96398d347c4d8a3e38","businesspartnergroup_id":"a0744d960250160a7363a048792a587c","protheus_id":"000003","deleted":"False","erp_id":"000003","mdmCounterForEntity__DATETIME__":"2023-12-03T22:59:37.254000Z","_ingestionDatetime":"2023-12-03T22:59:41.639209Z"}]

# Convert data to DataFrames
df_invoice = pd.DataFrame(invoice_data)
df_business_partner = pd.DataFrame(business_partner_data)

df_invoice['dt_invoice_time'] = pd.to_datetime(df_invoice['docissue'])
df_invoice['dt_invoice'] = df_invoice['dt_invoice_time'].dt.date
df_invoice['dt_invoice_weekday'] = df_invoice['dt_invoice_time'].dt.weekday

# df_invoice = df_invoice.dropna(subset=['dt_invoice_weekday'])

# Merge data on the 'businesspartner_id' column
# df_merged = pd.merge(df_invoice, df_business_partner, on='businesspartner_id', suffixes=('_invoice', '_business_partner'))

df_invoice_count = df_invoice.groupby([ 'dt_invoice_weekday', 'businesspartner_id'])['invoice_id'].count().reset_index()
df_invoice_count.rename(columns={'invoice_id': 'invoice_count'}, inplace=True)

df_business_partner_with_count = pd.merge(df_business_partner, df_invoice_count, on='businesspartner_id', how='left')
df_business_partner_with_count['invoice_count'].fillna(0, inplace=True)

# Extract relevant features and target variable
X = df_business_partner_with_count[['dt_invoice_weekday', 'businesspartner_id']]
y = df_business_partner_with_count['invoice_count']

# Convert categorical features to numerical using one-hot encoding
X_encoded = pd.get_dummies(X, columns=['businesspartner_id'], drop_first=True)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Create a linear regression model
imputer = SimpleImputer(strategy='mean')
model = LinearRegression()

X_train = imputer.fit_transform(X_train)
X_test = imputer.transform(X_test)

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

# Plot the predicted vs actual values
plt.scatter(y_test, y_pred)
plt.xlabel('Actual Values')
plt.ylabel('Predicted Values')
plt.title('Actual vs Predicted Values')
# plt.show()

columns = [
    'dt_invoice_weekday',
    'businesspartner_id_fa426a07b9b70daaedbd7c85fd53901c',
    'businesspartner_id_fd2b7dbe63b9cfc558eca54f494db2c2',
    'predictValue'
]

df = pd.DataFrame(X_test, columns=columns[:-1])  # Exclude the last column from data_array
df[columns[-1]] = y_pred
df['executionDate'] = pd.Timestamp('now')
df['rowNumber'] = np.arange(df.shape[0])

print(df)

staging = Staging(Carol())
staging.send_data(staging_name = 'execution_history', data = df, step_size = 2,
                 connector_id='f673daea3af94179b06b1db79b979430', print_stats = True)
