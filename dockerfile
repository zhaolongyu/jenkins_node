FROM nginx:latest 
FROM node:8.9-alpine
MAINTAINER zyl_facode

RUN npm install


COPY  ./dist    /usr/share/nginx/html/ 
CD /usr/share/nginx/html/
CMD ["npm", "start"]