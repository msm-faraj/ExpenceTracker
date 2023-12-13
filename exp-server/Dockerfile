#This is a dockerfile for server

FROM node:21-alpine3.18 

WORKDIR /exp-server

COPY package*.json ./

RUN npm install

COPY  src ./src

CMD ["npm", "run", "start"]



