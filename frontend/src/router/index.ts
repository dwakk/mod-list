import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModsView from "../views/ModsView.vue";
import TutorialsView from "../views/TutorialsView.vue";
import LoginViewVue from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/mods",
      component: ModsView,
    },
    {
      path: "/tutorials",
      component: TutorialsView,
    },
    {
      path: "/login",
      component: LoginViewVue,
    }
  ],
});

export default router;
