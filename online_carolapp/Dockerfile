
FROM totvslabs/pycarol:2.30.0

env SRCFOLDER=online_carolapp

WORKDIR /app
ADD requirements.txt /app/
ADD online_carolapp/ /app/online_carolapp/

RUN pip install -r requirements.txt && \
  pip install gunicorn

EXPOSE 5000

VOLUME [ "/app" ]

CMD ["gunicorn", "-c", "/app/online_carolapp/gunicorn.conf.py", "online_carolapp.alg_online_carolapp:application"]
