import { storageUserId, storageToken } from '../../storage';
import api from '../../api/user';

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
      const login = await api.login(data);
      if (login.data.success) {
        commit('SET_LOGIN', login.data.access_token);
        commit('SET_USER', login.data.user);
      }
    },
    UserLogout({ commit }) {
      commit('SET_LOGOUT');
    },
    UserRegister() {

    },
    UserUpdate() {

    },
  },
};
