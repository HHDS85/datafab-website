import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES, ROUTE_PATHS, SPACING } from '@/constants';

const SUPPORTED_LOCALES = ['de', 'en'];
const DEFAULT_LOCALE = 'de';

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_NAMES.HOME,
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: ROUTE_PATHS.IMPRESSUM,
    name: ROUTE_NAMES.IMPRESSUM,
    component: () => import('@/views/ImpressumView.vue')
  },
  {
    path: ROUTE_PATHS.DATENSCHUTZ,
    name: ROUTE_NAMES.DATENSCHUTZ,
    component: () => import('@/views/DatenschutzView.vue')
  },
  {
    path: ROUTE_PATHS.AGB,
    name: ROUTE_NAMES.AGB,
    component: () => import('@/views/AGBView.vue')
  }
];

const localizedRoutes = SUPPORTED_LOCALES.flatMap(locale =>
  routes.map(route => ({
    ...route,
    path: `/${locale}${route.path}`,
    name: `${locale}-${route.name}`,
    meta: { ...route.meta, locale }
  }))
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const savedLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
        return `/${savedLocale}/`;
      }
    },
    ...localizedRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: to => {
        const savedLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
        return `/${savedLocale}/`;
      }
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

router.beforeEach((to, from, next) => {
  const locale = to.meta.locale || DEFAULT_LOCALE;
  if (SUPPORTED_LOCALES.includes(locale)) {
    localStorage.setItem('locale', locale);
  }
  next();
});

export default router;
