

# BUILD PHASE
FROM node:14-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# RUN PHASE

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
# to make react-router work with nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
