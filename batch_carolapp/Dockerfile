FROM totvslabs/pycarol:2.33.1

RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip install -r requirements.txt
ADD . /app

CMD ["python3", "-m", "batch_carolapp.batch_carolapp_algorithm"]
