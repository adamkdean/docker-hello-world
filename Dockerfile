FROM adamkdean/node
MAINTAINER Adam K Dean <adamkdean@googlemail.com>

RUN mkdir /var/service
ADD . /var/service
WORKDIR /var/service

RUN npm install

CMD ["npm", "start"]
