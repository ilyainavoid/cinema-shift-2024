import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import type { Film } from '@/interfaces/film.ts';
import { getTodaysFilms } from '@/utils/api/cinema/today/todayRequest.ts';

const useFetchTodaysFilms = () => {
  const [filmList, setFilmList] = useState<Film[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodaysFilms = async () => {
      try {
        const response = await getTodaysFilms();
        const fetchedFilms: Film[] = response.data.films;
        setFilmList(fetchedFilms);
        setLoaded(true);
      } catch (error) {
        toast('Произошла ошибка при получении списка фильмов!');
      }
    };

    fetchTodaysFilms();
  }, []);

  return [loaded, filmList] as const;
};

export default useFetchTodaysFilms;
