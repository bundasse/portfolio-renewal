import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfoilo",
    component: () => import("./views/PortfolioView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;