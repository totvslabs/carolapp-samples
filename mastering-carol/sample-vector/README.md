
CREATE OR REPLACE MODEL
  `carol-c09e7887fe1e4a1eb97b.custom_data.embedding_model`
REMOTE WITH CONNECTION
  `carol-c09e7887fe1e4a1eb97b.us.conn_carol_cloud_resource`
OPTIONS (
  ENDPOINT = 'gemini-embedding-001'
);
