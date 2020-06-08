import Vue from "vue";
import VueRouter from "vue-router";
import { persistentsNavRoutes, loggedInNavRoutes, loggedOutNavRoutes } from "./routes";
// import { store } from '../store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    ...persistentsNavRoutes,
    ...loggedInNavRoutes,
    ...loggedOutNavRoutes
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (window.localStorage.getItem("authToken") === null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      })
    } else {
      let user = JSON.parse(localStorage.getItem("currentUser"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.role === 'admin') {
          next();
        } else {
          next({path: '/dashboard'})
        }
      } else if(to.matched.some(record => record.meta.current_user)) {
        if(user.userId) {
          next();
        } else {
          next({
            path: '/'
          })
        }
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("authToken") !== null) {
      next({
        path: '/courses'
      });
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});


