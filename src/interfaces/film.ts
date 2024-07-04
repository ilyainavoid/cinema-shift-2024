import {FilmPerson} from "./filmPerson.ts";
import {Country} from "./country.ts";

export interface Film {
    id: string;
    name: string;
    originalName: string;
    description: string;
    releaseDate: string;
    actors: FilmPerson[];
    directors: FilmPerson[];
    genres: string[];
    runtime: number;
    ageRating: 'G' | 'PG' | 'PG13' | 'R' | 'NC17';
    img: string;
    country?: Country;
}