import type { Country } from './country.ts';
import type { FilmPerson } from './filmPerson.ts';
import type { UserRatings } from './userRatings.ts';

export interface Film {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: FilmPerson[];
  directors: FilmPerson[];
  genres: string[];
  userRatings: UserRatings;
  runtime: number;
  ageRating: 'G' | 'PG' | 'PG13' | 'R' | 'NC17';
  img: string;
  country?: Country;
}
