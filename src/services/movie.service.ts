import axiosService from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres, IMovie, IPaginate, ISearchMovie, IDetails} from "../interfaces";

const movieService = {
    getAll: (page: string): IRes<IPaginate<IMovie[]>> => axiosService.get(urls.movie(page)),
    getGenres:(): IRes<IGenres> => axiosService.get(urls.genres()),
    getMovieByName: (name: string): IRes<IPaginate<ISearchMovie[]>> => axiosService.get(urls.searchMovie(name)),
    getMovieById: (id: string): IRes<IDetails> => axiosService.get(urls.movieById(id)),
    getMoviesByGenre: (genre_key: string, page: string): IRes<IPaginate<IMovie[]>> => axiosService.get(urls.moviesByGenres(genre_key, page))
}

export default movieService