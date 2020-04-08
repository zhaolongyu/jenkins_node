import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";

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
