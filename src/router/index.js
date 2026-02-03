import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES, ROUTE_PATHS, SPACING } from '@/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATHS.HOME,
      name: ROUTE_NAMES.HOME,
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: ROUTE_PATHS.IMPRESSUM,
      name: ROUTE_NAMES.IMPRESSUM,
      component: () => import('@/views/ImpressumView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: SPACING.SCROLL_OFFSET
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
