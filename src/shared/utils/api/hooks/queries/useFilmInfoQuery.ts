import { getFilmInfo } from '@api/requests/cinema/getFilmInfo.ts';
import { useQuery } from '@tanstack/react-query';

import type { FilmId } from '@/@types/api';

export const useFilmInfoQuery = (id: FilmId) => {
  const query = useQuery({
    queryKey: ['filmInfo', id],
    queryFn: () => getFilmInfo({ params: id }),
    select: (data) => data
  });

  return { ...query };
};
