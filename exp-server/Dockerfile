FROM node:17-alpine 

WORKDIR /exp-server

COPY package*.json ./

RUN npm install

COPY  src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]

