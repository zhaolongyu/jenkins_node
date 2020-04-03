cnpm install
npm run build
docker build -t jenkins_nginx_vue_demo:v1  .
docker run -d -p 8090:80 jenkins_nginx_vue_demo:v1