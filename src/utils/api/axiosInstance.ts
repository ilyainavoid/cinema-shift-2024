import axios from 'axios';
import { BASE_URL } from '../../consts/baseURL.ts';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    header: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(
            `Запрос: ${config.method?.toUpperCase()} ${config.url}`,
            config,
        );
        return config;
    },
    (error) => {
        console.error('Ошибка запроса:', error);
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(
            `Ответ: ${response.status} ${response.statusText}`,
            response,
        );
        return response;
    },
    (error) => {
        console.error('Ошибка:', error);
        return Promise.reject(error);
    },
);

export default axiosInstance;
