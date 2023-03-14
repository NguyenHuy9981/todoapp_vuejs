import queryString from 'query-string';
import router from '../../router';
import { rootUrl, staticBase } from '../../config/app';

export default {
  state: {
    login: '/login',
    register: '/register',
    todo: '/todo',
    todoId: '/todo',
    me: '/me',
    changePass: '/changePass',
    forgotPass: '/forgotPass',
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
    getQueryUrl() {
      return (name, qs = {}) => `${rootUrl}/${name}?${queryString.stringify(qs)}`;
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
