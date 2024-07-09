import type { FC } from 'react';
import LoadingIndicator from '@ui/LoadingIndicator/LoadingIndicator.tsx';
import Title from '@ui/Title/Title.tsx';

import FilmCard from '@/components/FilmCard/FilmCard.tsx';
import { useTodaysFilmsQuery } from '@/hooks/queries/getTodaysFilmsQuery.ts';
import type { Film } from '@/interfaces/film';

import styles from './Playbill.module.scss';

const PlaybillPage: FC = () => {
  const { isLoading, data } = useTodaysFilmsQuery();

  return (
    <section className={styles.playbillContainer}>
      {!isLoading ? (
        <div className={styles.playbillContent}>
          <Title as='h2' format='text-bold' className={styles.playbillHeading}>
            Афиша
          </Title>
          <div className={styles.postersContainer}>
            {!isLoading &&
              data?.data?.films.map((film: Film) => <FilmCard key={film.id} film={film} />)}
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
