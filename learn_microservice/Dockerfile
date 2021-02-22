FROM node:alpine

WORKDIR /apps/learn_node/Microservice/learn_microservice
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]