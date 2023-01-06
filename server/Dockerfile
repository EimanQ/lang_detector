FROM node

WORKDIR /index

COPY package.json  /index

RUN npm install

EXPOSE 3333

CMD ["node", "index.ts"]