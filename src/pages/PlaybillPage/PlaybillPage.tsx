import type { FC } from 'react';
import { useTodaysFilmsQuery } from '@restapi/hooks/queries/useTodaysFilmsQuery.ts';

import FilmCard from '@/pages/PlaybillPage/FilmCard/FilmCard.tsx';
import LoadingIndicator from '@/shared/components/UI/LoadingIndicator/LoadingIndicator.tsx';
import Title from '@/shared/components/UI/Title/Title.tsx';
import type { Film } from '@/shared/interfaces/film';

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
