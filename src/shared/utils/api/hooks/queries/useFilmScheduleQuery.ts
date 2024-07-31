import { getFilmSchedule } from '@api/requests/cinema/getFilmSchedule.ts';
import { useQuery } from '@tanstack/react-query';

import type { FilmId } from '@/@types/api';

export const useFilmScheduleQuery = (id?: FilmId) => {
  const query = useQuery({
    queryKey: ['schedule', id],
    queryFn: () => {
      if (id) {
        return getFilmSchedule({ params: id });
      }
      return Promise.reject(new Error('ID фильма невалиден!'));
    },
    select: (data) => data
  });

  return { ...query };
};
