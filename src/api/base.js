import axios from 'axios';
import { storageToken } from '../storage';
import { apiBase } from '../config/app';

const api = axios.create({
  baseURL: apiBase,
});

api.interceptors.request.use((config) => {
  config.headers.auth_token = storageToken.get();
  return config;
});

api.interceptors.response.use((response) => response.data);

export default api;
