import {Film} from "../../../../interfaces/film.ts";

export interface TodayRequestResponse {
    success: boolean;
    reason?: string;
    films: Film[];
}