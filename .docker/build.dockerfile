FROM node:14-alpine

WORKDIR /opt/app
COPY . .

### ENTRYPOINT/RUN
RUN npm i
RUN npm run build

CMD ["yarn", "start"]