FROM node:lts

WORKDIR /usr/src/app

ENV CI="true"

RUN apt-get update

RUN apt-get install -y chromium

RUN --mount=type=bind,source=package.json,target=package.json \
#    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    --mount=type=secret,id=env \
    npm install

COPY . .

CMD npm run test