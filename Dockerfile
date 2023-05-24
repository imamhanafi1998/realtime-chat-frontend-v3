# FROM node:lts-alpine
# ENV NODE_ENV=production
# # WORKDIR /usr/src/app
# WORKDIR /opt/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production && npm install -g serve && mv node_modules ../
# COPY . .
# EXPOSE 3030
# # RUN chown -R node /usr/src/app
# RUN chown -R node /opt/app
# USER node
# CMD ["npm", "run", "build"]

# # FROM nginx:1.17.1-alpine
# # COPY nginx.conf /etc/nginx/nginx.conf
# # COPY "build" /usr/share/nginx/html

FROM node:lts-alpine
WORKDIR /opt/app
COPY build ./
RUN npm install --production && npm install -g serve
EXPOSE 3030
CMD "serve -s build -l 3030"