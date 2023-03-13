import { storageUserId, storageToken } from '../../storage';
import apiAuth from '../../api/auth';
import apiUser from '../../api/user';

export default {
  state: {
    authed: !!(storageToken.get()),
    token: storageToken.get(),
    name: '',
    email: '',
    id: storageUserId.get(),
    detail: {},
  },
  getters: {
    getUserAuthed(state) {
      return state.authed;
    },
    getUserName(state) {
      return state.name;
    },
    getUserId(state) {
      return state.id;
    },
    getUserEmail(state) {
      return state.email;
    },
    getUserDetail(state) {
      return state.detail;
    },
  },
  mutations: {
    SET_LOGIN(state, token) {
      state.token = token;
      state.authed = true;
      storageToken.set(token);
    },
    SET_USER(state, user) {
      state.id = user._id;
      state.email = user.email;
      state.name = user.name;
      state.detail = user;
    },
    SET_LOGOUT(state) {
      state.token = '';
      state.authed = false;
      storageToken.remove();
    },
  },
  actions: {
    async UserLogin({ commit }, data) {
      const result = await apiAuth.login(data);

      if (result.success && result.data.access_token) {
        commit('SET_LOGIN', result.data.access_token);
        commit('SET_USER', result.data.user);
      }

      return result;
    },
    UserLogout({ commit }) {
      commit('SET_LOGOUT');
    },
    async UserInfo({ commit }) {
      const user = await apiUser.getMe();
      commit('SET_USER', user.data);
    },
    async UserRegister(_, data) {
      const result = await apiAuth.register(data);
      return result;
    },
    async UserchangePass({}, data) {
      const result = await apiUser.changePassword(data);
      return result;
    },
  },
};
