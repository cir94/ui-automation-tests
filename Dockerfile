FROM node:22-alpine

COPY package.json /app/
COPY url-module.js /app/
COPY configs /app/
COPY tests /app/
COPY pages /app/

WORKDIR /app

RUN npm install
RUN --mount=type=secret,id=env \
    cat /run/secrets/env

CMD ["npm run test"]