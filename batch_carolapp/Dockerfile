
FROM totvslabs/pycarol:2.30.0

WORKDIR /app
ADD requirements.txt /app/
ADD batch_carolapp/ /app/batch_carolapp/

RUN pip install -r requirements.txt

VOLUME [ "/app" ]

CMD ["python3", "-m", "batch_carolapp.batch_carolapp_algorithm"]
