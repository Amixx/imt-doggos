import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../pages/GalleryPage.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../pages/ArticlePage.vue')
    }
  ]
})

export default router
