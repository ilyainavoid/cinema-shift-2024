import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '@ui/Button/Button.tsx';
import FractionalRating from '@ui/FractionalRating/FractionalRating.tsx';
import Text from '@ui/Text/Text.tsx';
import Title from '@ui/Title/Title.tsx';

import { BASE_URL } from '@/consts/baseURL.ts';
import type { Film } from '@/interfaces/film.ts';

import FilmInfoLabel from '../GenreAndCountryLabel/FilmInfoLabel.tsx';

import styles from './filmcard.module.scss';

interface FilmCardProps {
  film: Film;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const imagePath = `${BASE_URL}${film.img}`;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imagePath} alt={film.name} />
        <FilmInfoLabel genres={film.genres} releaseDate={film.releaseDate} country={film.country} />
      </div>
      <div className={styles.descriptionContainer}>
        <div>
          <Title as='h2' style='title-bold'>
            {film.name}
          </Title>
          <Text style='text-regular' className='translucent'>
            {film.originalName}
          </Text>
        </div>
        <div>
          <FractionalRating rating={Number(film.userRatings.kinopoisk)} />
          <Text style='text-regular' className='translucent' fractions={5} step={2}>
            Kinopoisk - {film.userRatings.kinopoisk}
          </Text>
        </div>
        <div>
          <Link to={`film/${film.id}`}>
            <Button type='Primary'>
              <Text style='text-semi-bold' className={styles.buttonText}>
                Подробнее
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
