# Use an official Python runtime as a base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the Goblet application files into the container
COPY . /app

ENV GDAL_VERSION=3.1

RUN apt-get update && apt-get install -y libgeos-dev
RUN apt-get update && apt-get install -y libgdal-dev

# Install any necessary dependencies
RUN pip3 install -r requirements.txt

# Define the command to run your Goblet application
CMD ["python3", "main.py"]
