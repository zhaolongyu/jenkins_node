# FROM nginx:latest 
 FROM node:8.9-alpine
 MAINTAINER zyl_facode
 ADD ./server  /app/
 #进入到app目录下面，类似cd
 WORKDIR /app
 RUN npm install
#  COPY  ./dist    /usr/share/nginx/html/ 
# CD /usr/share/nginx/html/
 CMD ["npm", "start"]