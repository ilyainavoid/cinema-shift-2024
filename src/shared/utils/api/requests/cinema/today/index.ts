import api from '@api/api.ts';
import type { AxiosResponse } from 'axios';

import type { FilmsResponse, RequestConfig } from '@/@types/api';

type GetTodaysFilmsConfig = RequestConfig;

export const getTodaysFilms = (
  config?: GetTodaysFilmsConfig
): Promise<AxiosResponse<FilmsResponse>> => {
  return api.get('/cinema/today', config?.config);
};
