FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . /app
RUN npm install --global --unsafe-perm serve
RUN npm run build
RUN chown -R node /app
USER node
CMD ["serve", "-s", "-l", "3000", "build"]
EXPOSE 3000
