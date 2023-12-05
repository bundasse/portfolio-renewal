import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/profile",
    name: "Profiie",
    component: () => import("./views/ProfileView.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfoilo",
    component: () => import("./views/PortfolioView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;