FROM node:10

# Create app directory
WORKDIR /usr/local/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY docker-entrypoint.sh ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]

# docker build -t robsonpoffo/node-web-app .
# Successfully tagged robsonpoffo/node-web-app:latest
# docker push robsonpoffo/node-web-app:latest