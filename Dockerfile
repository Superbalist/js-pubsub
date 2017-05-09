FROM node:7.9.0
MAINTAINER Superbalist <tech+docker@superbalist.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY src /usr/src/app/src/
COPY examples /usr/src/app/examples/

RUN npm run build

CMD ["/bin/bash"]
