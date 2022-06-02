import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/components/auth/Login';
import { userKey } from '@/global';
import Users from '/src/view/admin/users/HeaderTitle';
import Atualizar from '/src/view/admin/change/HeaderTitle';
import PersonalData from '/src/view/admin/people/HeaderTitle';
import Inicio from '/src/home/Inicio';
import Financas from '/src/view/financas/Financas';
import Marketing from '/src/view/marketing/Marketing';
import TI from '/src/view/ti/TI';
import RH from '/src/view/rh/RH';
import Departamentos from '/src/layout/departamentos/Departamentos';

Vue.use(VueRouter);

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Auth,
  },

  {
    name: 'users',
    path: '/users',
    component: Users,
  },
  {
    name: 'update',
    path: '/update',
    component: Atualizar,
  },
  {
    name: 'personalData',
    path: '/personalData',
    component: PersonalData,
  },
  {
    name: 'departamentos',
    path: '/departamentos',
    component: Departamentos,
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
    component: TI,
  },
  {
    name: 'rh',
    path: '/rh',
    component: RH,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const json = JSON.parse(localStorage.getItem(userKey));

  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const user = JSON.parse(json);
    user && user.user.isAdmin ? next() : next({ path: '/' });
  } else {
    next();
  }
});

export default router;
