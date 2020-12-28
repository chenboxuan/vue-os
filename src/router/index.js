import { createRouter, createWebHistory } from 'vue-router'
import HomeDesktop from '../views/HomeDesktop.vue'

const routes = [
  {
    path: '/',
    name: 'HomeDesktop',
    component: HomeDesktop
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
