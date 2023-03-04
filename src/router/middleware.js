import store from '../store';
import router from './index';

let isInited = false;

const authList = ['/login', '/register'];
const whiteList = [...authList, '/'];

router.beforeEach(async (to, from, next) => {
  const { path } = to;

  if (store.getters.getUserAuthed && !isInited) {
    await store.dispatch('UserInfo');
    isInited = true;
  }

  if (store.getters.getUserAuthed && authList.includes(path)) {
    next('/me');
  } else if (!whiteList.includes(path) && !store.getters.getUserAuthed) {
    next('/login');
  } else {
    next();
  }
});

export default router;
