import router from '../../router';
import { staticBase } from '../../config/app';

export default {
  state: {
    login: '/login',
    register: '/register',
    todo: '/todo',
    todoId: '/todo',
    me: '/me',
    changePass: '/changePass',
    notFound: '/error/404',
  },
  getters: {
    getRouterPath(state) {
      return (name) => state[name];
    },
    getRouterId(state) {
      return (name, id) => `${state[name]}/${id}`;
    },
    getPathUrl() {
      return (file) => `${staticBase}/${file}`;
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
