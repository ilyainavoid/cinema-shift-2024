import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import FilmInfoLabel from '@/shared/components/GenreAndCountryLabel/FilmInfoLabel.tsx';
import Button from '@/shared/components/UI/Button/Button.tsx';
import FractionalRating from '@/shared/components/UI/FractionalRating/FractionalRating.tsx';
import Skeleton from '@/shared/components/UI/Skeleton/Skeleton.tsx';
import Text from '@/shared/components/UI/Text/Text.tsx';
import Title from '@/shared/components/UI/Title/Title.tsx';
import { BASE_URL } from '@/shared/consts/baseURL.ts';
import type { Film } from '@/shared/interfaces/film.ts';

import styles from './Filmcard.module.scss';

interface FilmCardProps {
  film: Film;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const imagePath = `${BASE_URL}${film.img}`;
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {!imageLoaded && <Skeleton.Image />}
        <img
          style={{ display: imageLoaded ? 'block' : 'none' }}
          src={imagePath}
          alt={film.name}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
        <FilmInfoLabel genres={film.genres} releaseDate={film.releaseDate} country={film.country} />
      </div>
      <div className={styles.descriptionContainer}>
        <div>
          <Title as='h2' format='title-bold'>
            {film.name}
          </Title>
          <Text format='text-regular' className='translucent'>
            {film.originalName}
          </Text>
        </div>
        <div>
          <FractionalRating rating={Number(film.userRatings.kinopoisk)} />
          <Text format='text-regular' className='translucent'>
            Kinopoisk - {film.userRatings.kinopoisk}
          </Text>
        </div>
        <div>
          <Link to={`film/${film.id}`}>
            <Button appearance='Primary'>
              <Text format='text-semi-bold' className={styles.buttonText}>
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
