FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

COPY client ./client

COPY admin ./admin

RUN yarn install:client --production

RUN yarn install:admin --production

RUN yarn build:client

RUN yarn build:admin

COPY server ./server

RUN yarn install:server --production

RUN mv -v ./client/build/* ./server/public/

RUN rm -rf ./client

RUN mv -v ./admin/build/* ./server/public/admin

RUN rm -rf ./admin

CMD ["yarn", "start:production"]