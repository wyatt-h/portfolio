FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn install --production

RUN yarn build

EXPOSE 3000

CMD ["npm", "start"]