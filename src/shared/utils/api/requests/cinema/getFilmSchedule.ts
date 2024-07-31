import api from '@api/api.ts';
import type { AxiosResponse } from 'axios';

import type { FilmId, RequestConfig, ScheduleResponse } from '@/@types/api';

export type GetFilmScheduleConfig = RequestConfig<FilmId>;
export const getFilmSchedule = (
  config: GetFilmScheduleConfig
): Promise<AxiosResponse<ScheduleResponse>> => {
  return api.get<ScheduleResponse>(`/cinema/film/${config.params}/schedule/`, config?.config);
};
