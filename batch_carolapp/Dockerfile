
FROM totvslabs/pycarol:2.30.0

RUN pip install -r requirements.txt

WORKDIR /app
ADD requirements.txt /app/
ADD batch_carolapp/ /app/batch_carolapp/

VOLUME [ "/app" ]

CMD ["python3", "-m", "batch_carolapp.batch_carolapp_algorithm"]
