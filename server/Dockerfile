FROM node

WORKDIR /index

COPY package.json  /index

RUN npm install

ENV PORT 3333

EXPOSE $PORT

CMD ["node", "index.ts"]