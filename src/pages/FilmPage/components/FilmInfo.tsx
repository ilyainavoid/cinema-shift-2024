import type { FC } from 'react';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import FilmInfoLabel from '@shared/components/GenreAndCountryLabel/FilmInfoLabel.tsx';
import { BASE_URL } from '@shared/consts/baseURL.ts';
import { useDescription } from '@shared/utils/hooks/useDescription.ts';
import { useImage } from '@siberiacancode/reactuse';
import Button from '@ui/Button/Button.tsx';
import FractionalRating from '@ui/FractionalRating/FractionalRating.tsx';
import Skeleton from '@ui/Skeleton/Skeleton.tsx';
import Text from '@ui/Text/Text.tsx';
import Title from '@ui/Title/Title.tsx';

import styles from './FilmInfo.module.scss';

import type { Film } from '@/@types/api';

interface FilmInfoProps {
  film?: Film;
}

const FilmInfo: FC<FilmInfoProps> = ({ film }) => {
  if (!film) {
    toast.error('❌ Произошла ошибка при загрузке фильма', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      transition: Bounce
    });
    return;
  }

  const IMAGE_PATH = BASE_URL + film.img;

  const briefDescription = useDescription(film.description);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const image = useImage(IMAGE_PATH);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {image.isLoading && <Skeleton.Image />}
        {!image.isLoading && image.data && (
          <>
            <img alt='poster' src={IMAGE_PATH} />
            <div className={styles.infolabelHolder}>
              <FilmInfoLabel
                genres={film.genres}
                releaseDate={film.releaseDate}
                country={film.country}
              />
            </div>
          </>
        )}
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
        {isDescriptionOpen ? (
          <div className={styles.description}>
            <Text format='text-regular'>
              {film.description}
              <Button
                appearance='text'
                className={styles.uncoverButton}
                onClick={() => setIsDescriptionOpen(false)}
              >
                <Text format='text-regular' className='translucent'>
                  скрыть
                </Text>
              </Button>
            </Text>
          </div>
        ) : (
          <div className={styles.description}>
            <Text format='text-regular'>
              {briefDescription}
              <Button
                appearance='text'
                className={styles.uncoverButton}
                onClick={() => setIsDescriptionOpen(true)}
              >
                <Text format='text-regular' className='translucent'>
                  раскрыть
                </Text>
              </Button>
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmInfo;
