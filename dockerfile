FROM node
LABEL Project Manager
RUN mkdir -p /app
COPY ./ .
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
