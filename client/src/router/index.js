import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { LocalStorage, SessionStorage } from "quasar";

// import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/UserStore.js";

// const router = useRouter();

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  // const isAuthenticated = true;
  const UserStore = useUserStore();

  if (!UserStore.loginStatus) {
    console.log(UserStore.loginStatus);
    if (LocalStorage.getItem("user")) {
      UserStore.setUser({
        role: LocalStorage.getItem("user").role,
        status: LocalStorage.getItem("user").loginStatus,
      });
    }
  }

  Router.beforeEach((to, from, next) => {
    // UserStore.loginStatus = false;
    // UserStore.role = 0;

    if (to.path == "/logout") {
      UserStore.logout();
      LocalStorage.remove("user");
      next({
        // path: "/",
        load: location.reload(),
        path: "/",
      });
    } else {
      if (UserStore.loginStatus) {
        console.log(to.meta.permission);

        switch (to.meta.permission) {
          case "admin":
            if (UserStore.role != 1) next({ path: "/member" });
            else next();
            break;

          case "member":
            if (UserStore.role != 0) next({ path: "/admin" });
            else next();
            break;

          default:
            // next({ path: "/admin" });
            next({ path: "/admin" });
            break;
        }
      } else {
        if (to.matched.some((record) => record.meta.requiresAuth))
          next({ path: "/" });
        else next();
      }
    }
  });

  return Router;
});
