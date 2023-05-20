import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import OneMovieByName from "./OneMovieByName";
import Loader from "../Loader/Loader";

import css from './one_movie.module.css'

const MoviesByName: FC = () => {
    const {moviesByName, loading} = useAppSelector(state => state.movieReducer)

    const location = useLocation();
    const name = new URLSearchParams(location.search).get('name')

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMoviesByName(name))
    }, [dispatch, name])

    return (
        <div>
            {loading ? <Loader/> :moviesByName.length !== 0 ? moviesByName.map(value => <OneMovieByName key={value.id} id={value.id} name={value.name}/>) : <div className={css.not_found_movies}>Not Found Movies</div>}
        </div>
    );
};

export default MoviesByName;