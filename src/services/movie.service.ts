import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {IGenreResponse, IMovieCredits, IMovieResponse} from "../interfaces";
import {IMovieDetails} from "../interfaces";


const movieService = {
    getAll: (page: number): AxiosRes<IMovieResponse> => axiosService.get(urls.movies, {params: {page}}),
    getDetails: (id: string | undefined): AxiosRes<IMovieDetails> => axiosService.get(`${urls.movie}/${id}`),
    getCredits: (id: string | undefined): AxiosRes<IMovieCredits> => axiosService.get(`${urls.movie}/${id}/credits`),
    getMovieNow: (page: number): AxiosRes<IMovieResponse> => axiosService.get(`${urls.movie}/now_playing`, {params: {page}}),
    getMovieUpcoming: (page: number): AxiosRes<IMovieResponse> => axiosService.get(`${urls.movie}/upcoming`, {params: {page}}),
    getMovieTop: (page: number): AxiosRes<IMovieResponse> => axiosService.get(`${urls.movie}/top_rated`, {params: {page}}),


    getGenres: (): AxiosRes<IGenreResponse> => axiosService.get(urls.genres),
    getByGenreId: (id: string | undefined, page: number): AxiosRes<IMovieResponse> =>
        axiosService.get(urls.movies, {params: {with_genres: id, page}}),

    getBySearchMovie: (query: string): AxiosRes<IMovieResponse> =>
        axiosService.get(urls.searchMovie, {params: {query}}),
};


export {movieService};