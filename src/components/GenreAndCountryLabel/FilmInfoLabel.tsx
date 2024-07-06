import { FC } from 'react';
import { Country } from '../../interfaces/country.ts';
import Text from '../UI/Text/Text.tsx';
import styles from './genreandcountry.module.scss';
interface GenreAndCountryLabelProps {
    genres: string[];
    country?: Country;
    releaseDate: string;
}

const FilmInfoLabel: FC<GenreAndCountryLabelProps> = ({
    genres,
    country,
    releaseDate,
}) => {
    const genresInline =
        genres.length > 3 ? genres.slice(0, 3).join(', ') : genres.join(', ');
    const releaseYear = releaseDate.slice(
        releaseDate.length - 4,
        releaseDate.length,
    );
    return (
        <div className={styles.rectangle}>
            <Text style={'text-bold'}>{genresInline}</Text>
            <Text style={'text-regular'}>
                {country ? country.name : 'Мир'}, {releaseYear}
            </Text>
        </div>
    );
};
export default FilmInfoLabel;
