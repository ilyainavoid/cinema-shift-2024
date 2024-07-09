import type { AxiosResponse } from 'axios';

import axiosInstance from '@/utils/api/axiosInstance.ts';

import type { RequestConfig, TodayRequestResponse } from '@/@types/api';

type GetTodaysFilmsConfig = RequestConfig;

export const getTodaysFilms = (
  config?: GetTodaysFilmsConfig
): Promise<AxiosResponse<TodayRequestResponse>> => {
  return axiosInstance.get('/cinema/today', config?.config);
};
