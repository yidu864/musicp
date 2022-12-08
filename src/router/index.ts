import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   name: 'index',
  //   path: '/',
  //   component: midIndex
  // }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
