import axios from 'axios';
import { Message } from 'element-ui';
import { storageToken } from '../plugins/storage';
import { apiBase } from '../config/app';

const api = axios.create({
  baseURL: apiBase,
});

api.interceptors.request.use((config) => {
  config.headers.auth_token = storageToken.get();
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    Message({
      message: error.response.data || error.response.statusText || error.code,
      type: 'error',
    });
    throw error.response.data;
  },
);

export default api;
