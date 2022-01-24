import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    component: () => import("@/views/View.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("@/views/Create.vue"),
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("@/views/Update.vue"),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
