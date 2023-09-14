FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ARG SERVER_MESSAGE

ENV SERVER_MESSAGE=$SERVER_MESSAGE

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]


