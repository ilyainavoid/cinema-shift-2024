import type { FC } from 'react';

import Text from '@/shared/components/UI/Text/Text.tsx';

import styles from './Genreandcountry.module.scss';

import type { Country } from '@/@types/api';

interface GenreAndCountryLabelProps {
  genres: string[];
  country?: Country;
  releaseDate: string;
}

const GENRES_LABEL_CAPACITY = 3;

const FilmInfoLabel: FC<GenreAndCountryLabelProps> = ({ genres, country, releaseDate }) => {
  const genresInline =
    genres.length > GENRES_LABEL_CAPACITY
      ? genres.slice(0, GENRES_LABEL_CAPACITY).join(', ')
      : genres.join(', ');
  const releaseYear = releaseDate.slice(releaseDate.length - 4, releaseDate.length);
  return (
    <div className={styles.rectangle}>
      <Text format='text-bold'>{genresInline}</Text>
      <Text format='text-regular'>
        {country ? country.name : 'Мир'}, {releaseYear}
      </Text>
    </div>
  );
};
export default FilmInfoLabel;
