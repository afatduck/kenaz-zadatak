import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/news/:id",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" },
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
