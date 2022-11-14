import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import midIndex from '@/views/mid/index.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: midIndex,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
