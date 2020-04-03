cnpm install
npm run build

docker ps -a | grep jenkins_nginx_vue_demo &> /dev/null
if [ $? -eq 0 ]
then
   npm -v
   docker stop  `docker ps -aq --filter ancestor=jenkins_nginx_vue_demo:v1`
fi

docker images | grep jenkins_nginx_vue_demo &> /dev/null
if [ $? -eq 0 ]
then
   node -v
   docker rmi  -f  jenkins_nginx_vue_demo:v1
fi




docker build -t  jenkins_nginx_vue_demo:v1  .
docker run -d -p 8090:80   jenkins_nginx_vue_demo:v1
npm -v