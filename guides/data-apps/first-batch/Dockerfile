FROM python:3.14-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV LOG_LEVEL=INFO

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

HEALTHCHECK NONE

ENTRYPOINT ["python", "main.py"]
