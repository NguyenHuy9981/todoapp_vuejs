import api from './base';

const router = '/user';

export default {
  async getMe() {
    return api.get(`${router}/me`);
  },
  async changePassword(data) {
    return api.put(`${router}/changePass`, data);
  },
};
