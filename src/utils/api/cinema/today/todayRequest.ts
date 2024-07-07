import type { AxiosResponse } from 'axios';

import axiosInstance from '@/utils/api/axiosInstance.ts';

import type { TodayRequestResponse } from './todayRequestResponse.ts';

export const getTodaysFilms = async (): Promise<AxiosResponse<TodayRequestResponse>> => {
  return axiosInstance.get('/cinema/today');
};
