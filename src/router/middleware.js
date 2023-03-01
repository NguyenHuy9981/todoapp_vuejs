import store from '../store';
import router from './index';

let isInited = false;

router.beforeEach(async (to, from, next) => {
  if (store.getters.getUserAuthed && !isInited) {
    await store.dispatch('UserInfo');
    isInited = true;
  }
  next();
});

export default router;
