export default [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../views/login.vue")
  },
  {
    path: "/header",
    name: "header",
    component: () => import("../../views/header.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/About.vue")
  }
];
