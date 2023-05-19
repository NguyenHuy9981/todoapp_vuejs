# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app/todo

COPY package*.json .

RUN npm install

COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine

COPY --from=build-stage /app/todo/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]