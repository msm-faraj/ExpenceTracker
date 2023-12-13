#This is a dockerfile for server

FROM node:21-alpine3.18

RUN npm install -g nodemon

WORKDIR /exp-server

COPY package*.json ./

RUN npm install

COPY  src ./src

CMD ["npm", "run", "start"]



