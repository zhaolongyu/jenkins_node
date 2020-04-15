import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store/index";
import routes from "./merge";
Vue.use(VueRouter);
const router = new VueRouter({
  // mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  // console.log("beforeEach", store.state, to);
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path === "/") {
      next();
    } else {
      next({
        path: "/"
      });
    }
  }
});
export default router;
