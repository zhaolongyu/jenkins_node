#制定node镜像的版本
FROM nginx:latest
#声明作者
MAINTAINER zyl_facode
#移动当前目录下面的文件到app目录下
COPY  ./dist    /usr/share/nginx/html/  
