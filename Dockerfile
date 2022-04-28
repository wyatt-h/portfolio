FROM node:16

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]