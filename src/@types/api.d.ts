export type ApiRequestConfig = import('axios').AxiosRequestConfig;

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

interface BaseResponse {
  success: boolean;
  reason?: string;
}

export interface FilmsResponse extends BaseResponse {
  films: Film[];
}

export interface OtpResponse extends BaseResponse {
  retryDelay: number;
}

export interface CreateOtpDto {
  phone: string;
}

export interface Country {
  name: string;
  code: string;
  code2: string;
  id: number;
}

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

export interface FilmPerson {
  id: string;
  professions: 'ACTOR' | 'DIRECTOR';
  fullName: string;
}

export interface UserRatings {
  kinopoisk: string;
  imbd: string;
}
