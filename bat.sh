cnpm install
npm run build
if [ !(docker ps -aq --filter ancestor=jenkins_nginx_vue_demo:v1) ];then 
 docker stop  `docker ps -aq --filter ancestor=jenkins_nginx_vue_demo:v1`
fi
docker build -t  jenkins_nginx_vue_demo:v1  .
docker run -d -p 8090:80  jenkins_nginx_vue_demo:v
npm -v