import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 开发
// axios.defaults.baseURL = "/api/";
// 生产
axios.defaults.baseURL = "http://47.100.188.145:8090";
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
