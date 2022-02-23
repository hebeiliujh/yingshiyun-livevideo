import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/index.vue';
// const Home = { template: '<div>Home</div>' }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;