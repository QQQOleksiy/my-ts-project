import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

import css from './movies_by_genre.module.css'
import Loader from "../Loader/Loader";

const MoviesByGenre: FC = () => {
    const location = useLocation();
    const page = new URLSearchParams(location.search).get('page')
    const genre_key = new URLSearchParams(location.search).get('genre_key')

    const navigate = useNavigate();

    const {moviesByGenre, loading} = useAppSelector(state => state.movieReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre([genre_key, page]))
    }, [dispatch, genre_key, page])

    return (
        <div>
            <div className={css.paginate}>
                <button className={css.button} onClick={() => navigate({search: `genre_key=${genre_key}&page=${+page - 2}`})} disabled={+page <= 2}>{'<<'}</button>
                <button className={css.button} onClick={() => navigate({search: `genre_key=${genre_key}&page=${+page - 1}`})} disabled={+page <= 1}>{'<'}</button>
                <div>page {page}</div>
                <button className={css.button} onClick={() => navigate({search: `genre_key=${genre_key}&page=${+page + 1}`})} disabled={!moviesByGenre.length || +page >= 500}>{'>'}</button>
                <button className={css.button} onClick={() => navigate({search: `genre_key=${genre_key}&page=${+page + 2}`})} disabled={!moviesByGenre.length || +page >= 499}>{'>>'}</button>
            </div>
            <div className={css.movies}>
                {loading ? <Loader/> : moviesByGenre && moviesByGenre.map(value => <MoviesListCard key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export default MoviesByGenre;