To build the image

`docker build . -t somos`

to run

`docker run --rm --env-file .env  -p 5000:5000 somos`