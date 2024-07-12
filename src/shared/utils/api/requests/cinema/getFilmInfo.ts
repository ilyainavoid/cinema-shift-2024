import api from '@api/api.ts';
import type { AxiosResponse } from 'axios';

import type { FilmId, FilmResponse, RequestConfig } from '@/@types/api';

export type GetFilmInfoConfig = RequestConfig<FilmId>;
export const getFilmInfo = (config: GetFilmInfoConfig): Promise<AxiosResponse<FilmResponse>> => {
  return api.get<FilmResponse>(`/cinema/film/${config.params}`, config?.config);
};
