import axiosInstance from '@/utils/api/axiosInstance.ts';

import type { RequestConfig } from '@/@types/api';

type GetTodaysFilmsConfig = RequestConfig;

export const getTodaysFilms = (config?: GetTodaysFilmsConfig) => {
  axiosInstance.get('/cinema/today', config?.config);
};
