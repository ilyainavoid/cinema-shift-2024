import { getTodaysFilms } from '@api/requests/cinema';
import { useQuery } from '@tanstack/react-query';

export const useTodaysFilmsQuery = () => {
  const query = useQuery({
    queryKey: ['todayFilms'],
    queryFn: () => getTodaysFilms(),
    select: (data) => data
  });

  return { ...query };
};
