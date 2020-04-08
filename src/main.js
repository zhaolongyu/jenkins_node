import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
// axios.defaults.baseURL = "/api/";
axios.defaults.baseURL = "http://47.100.188.145:8090";
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
