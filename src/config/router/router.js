import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/components/auth/Login';
import { userKey } from '@/global';
import Users from '/src/view/admin/users/HeaderTitle';
import NewPerson from '/src/view/admin/people/HeaderTitle';
import Inicio from '/src/home/Inicio';
import PrimeiraPagina from '/src/home/PrimeiraPagina';
import Financas from '/src/view/financas/Financas';
import Marketing from '/src/view/marketing/Marketing';
import TI from '/src/view/ti/TI';
import RH from '/src/view/rh/RH';
import FormDepartamento from '/src/layout/departamentos/FormDepartamento';
import Departamentos from '/src/layout/departamentos/Departamentos';
import DepartamentoInicio from '/src/layout/departamentos/DepartamentoInicio';

Vue.use(VueRouter);

const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: Auth,
  },

  {
    name: 'users',
    path: '/users',
    component: Users,
    // meta: { requiresAdmin: true },
  },
  {
    name: 'newPerson',
    path: '/newPerson',
    component: NewPerson,
    // meta: { requiresAdmin: true },
  },
  {
    name: 'primeira-pagina',
    path: '/',
    component: PrimeiraPagina,
  },
  {
    name: 'form-departamento',
    path: '/form-departamento',
    component: FormDepartamento,
  },
  {
    name: 'departamentos-inicio',
    path: '/departamentos-inicio',
    component: DepartamentoInicio,
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
    user && user.admin ? next() : next({ path: '/' });
  } else {
    next();
  }
});

export default router;
