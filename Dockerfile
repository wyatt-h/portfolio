FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn install --production

EXPOSE 3000

CMD ["npm", "start"]