import axios from 'axios';
import { storageToken } from '../storage';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  config.headers.auth_token = storageToken.get();
  return config;
});

api.interceptors.response.use((response) => response.data);

export default api;
