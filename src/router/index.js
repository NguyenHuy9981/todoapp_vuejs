import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/Home.vue';
import RegisterView from '../views/Register.vue';
import LoginView from '../views/Login.vue';
import MeView from '../views/Me.vue';
import ChangePass from '../views/ChangePass.vue';
import TodoIndex from '../views/Todo/Index.vue';
import TodoDetail from '../views/Todo/Detail.vue';

import Error404 from '../views/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/me',
    name: 'Me',
    component: MeView,
  },
  {
    path: '/changePass',
    name: 'ChangePass',
    component: ChangePass,
  },
  {
    path: '/todo',
    name: 'TodoIndex',
    component: TodoIndex,
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetail,
  },
  {
    path: '/error/404',
    name: 'Error Page',
    component: Error404,
  },
  {
    path: '*',
    name: 'Error Page',
    component: Error404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
