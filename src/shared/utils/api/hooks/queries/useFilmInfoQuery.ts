import { getFilmInfo } from '@api/requests/cinema/getFilmInfo.ts';
import { useQuery } from '@tanstack/react-query';

import type { FilmId } from '@/@types/api';

export const useFilmInfoQuery = (id?: FilmId) => {
  const query = useQuery({
    queryKey: ['filmInfo', id],
    queryFn: () => {
      if (id) {
        return getFilmInfo({ params: id });
      }
      return Promise.reject(new Error('ID фильма невалиден!'));
    },
    select: (data) => data
  });

  return { ...query };
};
