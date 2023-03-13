import api from './base';

const router = '/auth';

export default {
  async login(data) {
    return api.post(`${router}/login`, data, {
      params: {
        name: 'login',
      },
    });
  },
  async register(data) {
    return api.post(`${router}/register`, data, {
      params: {
        version: '1.0',
      },
      headers: {
        version: '1.0',
      },
    });
  },
  async forgotPassRequest(data) {
    return api.post(`${router}/forgotPassRequest`, data);
  },
  async checkTokenRequest(data) {
    return api.post(`${router}/checkTokenForgot`, data);
  },
  async forgotPassVerify(data) {
    return api.post(`${router}/forgotPassRequest`, data);
  },
};
