import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/components/auth/Auth';
import { userKey } from '@/global';
import UserPages from '@/components/users/UserPages';
import Inicio from '/src/home/Inicio';
import PrimeiraPagina from '/src/home/PrimeiraPagina';
import Financas from '/src/view/financas/Financas';
import Marketing from '/src/view/marketing/Marketing';
import DepartamentoTI from '/src/view/ti/DepartamentoTI';

Vue.use(VueRouter);

const routes = [
  {
    name: 'auth',
    path: '/login',
    component: Auth,
  },
  {
    name: 'userPages',
    path: '/users',
    component: UserPages,
  },
  {
    name: 'primeira-pagina',
    path: '/',
    component: PrimeiraPagina,
  },
  {
    name: 'inicio',
    path: '/inicio',
    component: Inicio,
  },
  {
    name: 'financas',
    path: '/financas',
    component: Financas,
  },
  {
    name: 'marketing',
    path: '/marketing',
    component: Marketing,
  },
  {
    name: 'ti',
    path: '/ti',
    component: DepartamentoTI,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey);

  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const user = JSON.parse(json);
    user && user.admin ? next() : next({ path: '/' });
  } else {
    next();
  }
});

export default router;
