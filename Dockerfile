#Use existing docker image as base
FROM node:14-alpine

WORKDIR /usr/app
#Download and install dependency

COPY ./packgae.json ./
RUN npm install
COPY ./ ./

#Tell image what to do when it starts as container

CMD ["npm","start"]