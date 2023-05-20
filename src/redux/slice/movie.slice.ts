import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IDetails, IGenre, IMovie, ISearchMovie} from "../../interfaces";
import movieService from "../../services/movie.service";

interface IState {
    movies: IMovie[];
    detailsMovie: IDetails;
    genres: IGenre[];
    moviesByGenre: IMovie[];
    moviesByName: ISearchMovie[];
    loading: boolean;
    theme: boolean;
}

const initialState: IState = {
    movies: [],
    detailsMovie: null,
    genres: [],
    moviesByGenre: [],
    moviesByName: [],
    loading: false,
    theme: true
}

const getAll = createAsyncThunk<IMovie[], string>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            const {results} = data
            return results

        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getGenres = createAsyncThunk<IGenre[], void>(
    'moviesSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres()
            const {genres} = data
            return genres
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IMovie[], string[]>(
    'movieSlice/getMoviesByGenre',
    async ([genre_key, page], {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genre_key, page)
            const {results} = data
            return results
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getDetailsMovie = createAsyncThunk<IDetails, string>(
    'movieSlice/getDetailsMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMoviesByName = createAsyncThunk<ISearchMovie[], string>(
    'movieSlice/getMoviesByName',
    async (name, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieByName(name)
            const {results} = data
            return results
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changeTheme: (state): void => {
            state.theme = !state.theme
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload
            })
            .addCase(getDetailsMovie.fulfilled, (state, action) => {
                state.detailsMovie = action.payload
            })
            .addCase(getMoviesByName.fulfilled, (state, action) => {
                state.moviesByName = action.payload
            })
            .addCase(getDetailsMovie.pending, (state) => {
                state.detailsMovie = null
            })
            .addMatcher(isPending(getAll, getMoviesByGenre, getDetailsMovie, getMoviesByName), (state, action) => {
                state.loading = true
            })
            .addMatcher(isFulfilled(), (state, action) => {
                state.loading = false
            })

})

const {actions, reducer: movieReducer} = slice

const movieActions = {
    ...actions,
    getAll,
    getGenres,
    getMoviesByGenre,
    getDetailsMovie,
    getMoviesByName
}

export {
    movieActions,
    movieReducer
}