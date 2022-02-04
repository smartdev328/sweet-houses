# ### STAGE 1: Build ###
FROM node:16 as builder
ENV NODE_OPTIONS="--max-old-space-size=4096"
ARG VUE_APP_URL_API

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

### STAGE 2: Release ###
FROM nginx:stable-alpine

COPY --from=builder /app/dist /app
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80