import { pages } from '@/pages'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/courses',
      component: () => import('@/app/layouts/DefaultLayout.vue'),
      children: [
        { path: '', component: pages.Home }
      ]
    }
  ],
})

export default router
