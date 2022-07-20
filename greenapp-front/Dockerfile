FROM node:14.16.1-alpine as build-front
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as ngnix
COPY --from=build-front /app/dist /bin/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
