FROM totvslabs/pycarol:2.33.1

RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip install -r requirements.txt

ADD . /app

EXPOSE 5000

CMD gunicorn -c /app/gunicorn.conf.py main:application
