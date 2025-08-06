import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/pages/auth/loginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginPage,
    },
    {
      path: '/dashboard',
      name: 'dashboardteste',
      component: () => import('@/pages/clients/dashboardView.vue'),
    },
  ],
})

export default router
