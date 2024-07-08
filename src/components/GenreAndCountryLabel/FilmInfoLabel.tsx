import type { FC } from 'react';
import Text from '@ui/Text/Text.tsx';

import type { Country } from '@/interfaces/country.ts';

import styles from './Genreandcountry.module.scss';

interface GenreAndCountryLabelProps {
  genres: string[];
  country?: Country;
  releaseDate: string;
}

const FilmInfoLabel: FC<GenreAndCountryLabelProps> = ({ genres, country, releaseDate }) => {
  const genresInline = genres.length > 3 ? genres.slice(0, 3).join(', ') : genres.join(', ');
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
