import { defineStore } from 'pinia';
import api from '../api/user';

export default defineStore('user', {
  state: () => ({
    token: '',
    username: '',
    data: {},
  }),
  getters: {
    getUserInfo() {
      return this.data;
    },
    getUserName() {
      return this.username;
    },
  },
  actions: {
    async FetchUserInfo() {
      this.data = (await api.getMe()).data;
      return this.data;
    },
  },
});
