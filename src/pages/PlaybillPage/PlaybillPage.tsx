import { FC } from 'react';
import FilmCard from '../../components/FilmCard/FilmCard.tsx';
import Title from '../../components/UI/Title/Title.tsx';
import useFetchTodaysFilms from '../../hooks/fetchTodaysFilms.ts';
import styles from './playbill.module.scss';

const PlaybillPage: FC = () => {
    const filmsList = useFetchTodaysFilms();

    return (
        <section className={styles.playbillContainer}>
            <div className={styles.playbillContent}>
                <Title
                    as="h2"
                    style="text-bold"
                    className={styles.playbillHeading}
                >
                    Афиша
                </Title>
                <div className={styles.postersContainer}>
                    {filmsList &&
                        filmsList.map((film) => (
                            <FilmCard key={film.id} film={film} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default PlaybillPage;
