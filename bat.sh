cnpm install
npm run build

docker ps | grep jenkins_nginx_vue_demo &> /dev/null
if [ $? -eq 0 ]
then
   docker stop  `docker ps -aq --filter ancestor=jenkins_nginx_vue_demo:v1`
fi

docker images | grep jenkins_nginx_vue_demo &> /dev/null
if [ $? -eq 0 ]
then
   docker image rm -f  jenkins_nginx_vue_demo
fi




docker build -t  jenkins_nginx_vue_demo:v1  .
docker run -d -p 8090:80   jenkins_nginx_vue_demo:v1
npm -v