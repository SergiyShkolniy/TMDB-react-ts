import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../configs";

import {IGenreResponse, IMovieResponse} from "../interfaces";
import {IMovieDetails} from "../interfaces/movieDetails.interface";
import {IMovieCredits} from "../interfaces/movieCredits.interface";

const movieService = {
    getAll: (page: number): AxiosRes<IMovieResponse> => axiosService.get(urls.movies, {params: {page}}),
    getDetails: (id: string | undefined): AxiosRes<IMovieDetails> => axiosService.get(`${urls.movie}/${id}`),
    getCredits: (id: string | undefined): AxiosRes<IMovieCredits> => axiosService.get(`${urls.movie}/${id}/credits`),

    getGenres: (): AxiosRes<IGenreResponse> => axiosService.get(urls.genres),
    getByGenreId: (id: string | undefined, page: number): AxiosRes<IMovieResponse> =>
        axiosService.get(urls.movies, {params: {with_genres: id, page}}),

    getBySearchMovie: (query: string): AxiosRes<IMovieResponse> =>
        axiosService.get(urls.searchMovie, {params: {query}}),
};


export {movieService};