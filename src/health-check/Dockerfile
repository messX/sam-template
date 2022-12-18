FROM node:16

WORKDIR /app

ADD package.json /app/package.json

RUN npm install

ADD . /app

ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["npm", "run", "start"]