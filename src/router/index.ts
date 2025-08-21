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
      component: () => import('@/layouts/dashboardView.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'backupDashboard' },
        },
        {
          path: 'backup',
          name: 'backupDashboard',
          component: () => import('@/pages/dashboards/backupDashboard.vue'),
        },
      ]
    },
  ],
})

export default router
