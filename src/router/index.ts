import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Main.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (userStore.login === '' && to.name !== 'login') {
    next('/login');
    return;
  } else {
    if (!router.hasRoute(to.name)) {
      next('/main');
      return;
    }
  }
  next();
});

export default router;
