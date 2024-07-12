import type { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFilmInfoQuery } from '@api/hooks/queries/useFilmInfoQuery.ts';
import { ROUTES } from '@shared/consts/routes.ts';
import Button from '@ui/Button/Button.tsx';
import BackIcon from '@ui/Icons/BackIcon.tsx';
import Text from '@ui/Text/Text.tsx';

import FilmInfo from '@/pages/FilmPage/components/FilmInfo.tsx';

import styles from './FilmPage.module.scss';

const FilmPage: FC = () => {
  const params = useParams();
  const filmId = params.id;
  const { data } = useFilmInfoQuery(filmId);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageContent}>
        <Link to={ROUTES.HOME}>
          <Button appearance='text'>
            <div className={styles.buttonBack}>
              <BackIcon width={24} height={24} color='#141C24' className={styles.icon} />
              <Text format='text-regular' className={styles.buttonBackText}>
                Назад
              </Text>
            </div>
          </Button>
        </Link>
        <section className={styles.filmInfo}>
          {data?.data.film && <FilmInfo film={data?.data.film} />}
        </section>
      </div>
    </div>
  );
};

export default FilmPage;
