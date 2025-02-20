export type ApiRequestConfig = import('axios').AxiosRequestConfig;

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

interface BaseResponse {
  success: boolean;
  reason?: string;
}

export type FilmId = string;
export type HallName = 'Red' | 'Green' | 'Blue';

export interface FilmsResponse extends BaseResponse {
  films: Film[];
}

export interface FilmResponse extends BaseResponse {
  film: Film;
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
  id: FilmId;
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

export interface SignInDto {
  phone: string;
  code: number;
}

export interface SignInResponse extends BaseResponse {
  user: User;
  token: string;
}

export interface User {
  phone: string;
  firstName: string;
  middleName: string;
  lastname: string;
  email: string;
  city: string;
}

export interface Place {
  price: number;
  type: 'ECONOM' | 'BLOCKED' | 'COMFORT';
}

export interface Schedule {
  date: string;
  seances: ScheduleSeance[];
}

export interface ScheduleSeance {
  time: string;
  hall: FilmHall;
  payedTickets: Ticket[];
}

export interface FilmHall {
  name: HallName;
  places: Place[][];
}

export interface HallTimeslots {
  [key: string]: ScheduleSeance[];
  red: ScheduleSeance[];
  green: ScheduleSeance[];
  blue: ScheduleSeance[];
}

export interface Ticket {
  filmId: FilmId;
  row: number;
  column: number;
  seance: FilmTicketSeance;
  phone: string;
}

export interface FilmTicketSeance {
  date: string;
  time: string;
}

export interface ScheduleResponse extends BaseResponse {
  schedules: Schedule[];
}
