import {FC} from "react";
import {Film} from "../../interfaces/film.ts";
import styles from './filmcard.module.scss'
import {BASE_URL} from "../../consts/baseURL.ts";
import FilmInfoLabel from "../GenreAndCountryLabel/FilmInfoLabel.tsx";
import Title from "../UI/Title/Title.tsx";
import Text from '../UI/Text/Text.tsx'
import FractionalRating from "../UI/FractionalRating/FractionalRating.tsx";
import Button from "../UI/Button/Button.tsx";
import {Link} from "react-router-dom";

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
                    <Title as="h2" style={"title-bold"}>{film.name}</Title>
                    <Text style={"text-regular"} className='translucent'>{film.originalName}</Text>
                </div>
                <div>
                    <FractionalRating rating={Number(film.userRatings.kinopoisk)}/>
                    <Text style={"text-regular"} className='translucent' fractions={5} step={2}>Kinopoisk - {film.userRatings.kinopoisk}</Text>
                </div>
                <div>
                    <Link to={'film/' + film.id}>
                        <Button type='Primary'>
                            <Text style='text-semi-bold' className={styles.buttonText}>Подробнее</Text>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FilmCard;