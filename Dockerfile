FROM node:16.20.2
COPY package.json /usr/src/pokedex/
COPY ./src /usr/src/pokedex/src/
WORKDIR /usr/src/pokedex/
RUN npm install -g @angular/cli angular-http-server
RUN npm i package.json
ENTRYPOINT [ "angular-http-server", "--path", "./src", "-p", "4200" ]
#CMD [ "npm run start" ]
