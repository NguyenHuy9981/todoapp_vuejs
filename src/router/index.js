import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Home.vue';
import RegisterView from '../views/Register.vue';
import LoginView from '../views/Login.vue';
import MeView from '../views/Me.vue';
import store from '../store';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let isInited = false;

router.beforeEach(async (to, from, next) => {
  if (store.getters.getUserAuthed && !isInited) {
    await store.dispatch('UserInfo');
    isInited = true;
  }
  next();
});
export default router;
