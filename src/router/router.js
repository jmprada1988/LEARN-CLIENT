import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: "userboard" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({ name: "userboard" });
    }
  } else {
    next();
  }
});

export default router;
