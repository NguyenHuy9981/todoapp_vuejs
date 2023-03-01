import router from '../../router';

export default {
  state: {
    login: '/login',
    register: '/register',
    todo: '/todo',
    todoId: '/todo',
    me: '/me',
  },
  getters: {
    getRouterPath(state) {
      return (name) => state[name];
    },
    getRouterId(state) {
      return (name, id) => `${state[name]}/${id}`;
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
