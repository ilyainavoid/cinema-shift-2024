import axios from 'axios';

import { BASE_URL } from '@/shared/consts/baseURL.ts';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    console.log(`Запрос: ${config.method?.toUpperCase()} ${config.url}`, config);
    return config;
  },
  (error) => {
    console.error('Ошибка запроса:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`Ответ: ${response.status} ${response.statusText}`, response);
    return response;
  },
  (error) => {
    console.error('Ошибка:', error);
    return Promise.reject(error);
  }
);

export default api;
