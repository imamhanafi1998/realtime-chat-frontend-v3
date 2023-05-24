# FROM node:lts-alpine
# ENV NODE_ENV=production
# # WORKDIR /usr/src/app
# WORKDIR /opt/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production && mv node_modules ../
# COPY . .
# EXPOSE 3032
# # RUN chown -R node /usr/src/app
# RUN chown -R node /opt/app
# USER node
# CMD ["npm", "start"]

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY "build" /usr/share/nginx/html