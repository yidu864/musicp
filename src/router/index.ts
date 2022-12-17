import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SongList from '@/views/functions/song-list.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: SongList
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
