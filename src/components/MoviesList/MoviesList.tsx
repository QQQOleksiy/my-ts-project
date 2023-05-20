import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import css from './movie_list.module.css'
import Loader from "../Loader/Loader";

const MoviesList: FC = () => {
    const location = useLocation();
    const page = new URLSearchParams(location.search).get('page')

    const navigate = useNavigate();

    const {movies, loading} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [dispatch, page])

    return (
        <div>

            <div className={css.paginate}>
                <button className={css.button} onClick={() => navigate({search: `page=${+page - 2}`})}
                        disabled={+page <= 2}>{'<<'}</button>
                <button className={css.button} onClick={() => navigate({search: `page=${+page - 1}`})}
                        disabled={+page <= 1}>{'<'}</button>
                <div>page {page}</div>
                <button className={css.button} onClick={() => navigate({search: `page=${+page + 1}`})}
                        disabled={!movies.length || +page >= 500}>{'>'}</button>
                <button className={css.button} onClick={() => navigate({search: `page=${+page + 2}`})}
                        disabled={!movies.length || +page >= 499}>{'>>'}</button>
            </div>
            <div className={css.movies} id={'up'}>
                {loading ? <Loader/> : movies.map(value => <MoviesListCard key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export default MoviesList;