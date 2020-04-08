export default [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../../views/Home.vue")
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
