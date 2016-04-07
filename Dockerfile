FROM node:argon

MAINTAINER Jóhan Davidsen <johan.davidsen@fjakkarin.com>

ENV MONGODB mongodb://192.168.99.100:27017

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

WORKDIR /usr/src/app/
ADD . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]
