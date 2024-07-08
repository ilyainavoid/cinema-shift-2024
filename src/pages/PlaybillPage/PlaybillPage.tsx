import type { FC } from 'react';
import LoadingIndicator from '@ui/LoadingIndicator/LoadingIndicator.tsx';
import Title from '@ui/Title/Title.tsx';

import FilmCard from '@/components/FilmCard/FilmCard.tsx';
import useFetchTodaysFilms from '@/hooks/fetchTodaysFilms.ts';

import styles from './Playbill.module.scss';

const PlaybillPage: FC = () => {
  const [loaded, filmsList] = useFetchTodaysFilms();

  return (
    <section className={styles.playbillContainer}>
      {loaded ? (
        <div className={styles.playbillContent}>
          <Title as='h2' format='text-bold' className={styles.playbillHeading}>
            Афиша
          </Title>
          <div className={styles.postersContainer}>
            {loaded && filmsList.map((film) => <FilmCard key={film.id} film={film} />)}
          </div>
        </div>
      ) : (
        <div className={styles.loadingContainerPlaybill}>
          <LoadingIndicator />
        </div>
      )}
    </section>
  );
};

export default PlaybillPage;
