import router from '../../router';

export default {
  state: {
    login: '/login',
    register: '/register',
    todo: '/todo',
    me: '/me',
  },
  getters: {
    getRouterPath(state) {
      return (name) => state[name];
    },
  },
  actions: {
    RouterTo({ getters }, name) {
      router.push({
        path: getters.getRouterPath(name),
      });
    },
  },
};
