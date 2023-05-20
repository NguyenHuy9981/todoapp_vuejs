# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app/todo

COPY package*.json .

RUN npm install

COPY . .
RUN npm run build
# build outout = /app/todo/dist

# production stage
FROM nginx:stable-alpine

COPY --from=build-stage /app/todo/dist /usr/share/nginx/html

EXPOSE 80

ENV VUE_APP_STATIC_URL=/uploads \
VUE_APP_ROOT_URL=/ \
VUE_APP_API_URL=/api \
VUE_APP_BASE_URL=/ \
VUE_APP_ROUTER_MODE=history

CMD ["nginx", "-g", "daemon off;"]