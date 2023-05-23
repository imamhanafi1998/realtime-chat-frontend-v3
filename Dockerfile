FROM node:lts-alpine
ENV NODE_ENV=production
# WORKDIR /usr/src/app
WORKDIR /opt/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production && mv node_modules ../
COPY . .
EXPOSE 3000
# RUN chown -R node /usr/src/app
RUN chown -R node /opt/app
USER node
CMD ["npm", "start"]
