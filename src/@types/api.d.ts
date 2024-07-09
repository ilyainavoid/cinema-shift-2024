import type { Film } from '@/interfaces/film.ts';

export type ApiRequestConfig = import('axios').AxiosRequestConfig;

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

interface BaseResponse {
  success: boolean;
  reason?: string;
}

export interface TodayRequestResponse extends BaseResponse {
  films: Film[];
}
