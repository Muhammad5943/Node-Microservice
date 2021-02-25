FROM node:alpine

WORKDIR /apps/learn_node/Microservice/
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]