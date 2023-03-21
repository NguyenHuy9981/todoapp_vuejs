import store from '../store';
import router from './index';

let isInited = false;

const authList = ['/login', '/register', '/forgotPass', '/verifyPass'];
const publicList = [...authList, '/'];
const adminList = ['/admin'];

router.beforeEach(async (to, from, next) => {
  const { path, name } = to;
  document.title = name;

  if (store.getters.getUserAuthed && !isInited) {
    await store.dispatch('UserInfo');
    isInited = true;
  }

  if (store.getters.getUserAuthed && authList.includes(path)) {
    next('/me');
  } else if (!store.getters.getUserAuthed && !publicList.includes(path)) {
    next('/login');
  } else if (!store.getters.getIsAdmin && adminList.includes(path)) {
    next('/404');
  } else {
    next();
  }
});

export default router;
