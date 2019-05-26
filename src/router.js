import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Wallet from "./views/Wallet.vue";
import store from "./store/store";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/wallet",
      name: "wallet",
      component: Wallet
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      beforeEnter: (to, from, next) => {
        next(new Error("You lost mate?"));
      }
    }
  ]
});
router.onError(error => {
  router.push({ name: "home" }, () =>
    store.dispatch("showNotification", error.message)
  );
});
export default router;
