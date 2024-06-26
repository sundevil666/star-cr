import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
      },
      { path: 'achievements',
        name: 'Achievements',
        component: () => import('pages/AchievementsPage.vue')
      },
      { path: 'results',
        name: 'ResultsPage',
        component: () => import('pages/ResultsPage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
