import HomeView from "@/views/HomeView/HomeView.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: HomeView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
