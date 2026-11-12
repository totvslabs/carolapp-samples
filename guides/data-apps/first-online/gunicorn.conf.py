import os

bind = f"0.0.0.0:{int(os.environ.get('PORT', '8080'))}"
workers = 1
threads = 2
timeout = 30
accesslog = "-"
errorlog = "-"
loglevel = os.environ.get("LOG_LEVEL", "info")
