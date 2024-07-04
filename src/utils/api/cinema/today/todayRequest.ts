import axiosInstance from "../../axiosInstance.ts";
import {AxiosResponse} from "axios";
import {TodayRequestResponse} from "./todayRequestResponse.ts";

export const getTodaysFilms = async ():Promise<AxiosResponse<TodayRequestResponse>> => {
    return await axiosInstance.get('/cinema/today');
}