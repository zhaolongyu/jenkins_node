import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store/index";
import routes from "./merge.js";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  // console.log("beforeEach", store.state, to);
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});
export default router;
