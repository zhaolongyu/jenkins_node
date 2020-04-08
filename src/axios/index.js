import axios from "axios";
import store from "../store";
import Router from "../router";

axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers = {
        token: localStorage.getItem("token")
      };
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  config => {
    store.commit("tokenBooleanTrue");
    config.headers = {
      token: localStorage.getItem("token")
    };
    console.log(config);
    return config;
  },
  err => {
    if (err.response.data.code === "401") {
      alert(err.response.data.msg);
      localStorage.removeItem("token", "");
      store.commit("tokenBooleanFalse");
      Router.replace({
        path: `/login`
      });
    }
    return Promise.reject(err.response.data);
  }
);
axios.defaults.withCredentials = true;

export default axios;
