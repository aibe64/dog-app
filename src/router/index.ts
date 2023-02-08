import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dog_info/:dog',
      name: 'dog info',
      component: () => import('@/views/DogInfo.vue')
    }
  ]
})

export default router
