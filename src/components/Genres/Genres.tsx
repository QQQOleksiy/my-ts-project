import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import OneGenre from "./OneGenre";

import css from './genres.module.css'

const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.genres_list}>
            {genres.map(value => <OneGenre key={value.id} genre={value}/>)}
        </div>
    );
};

export default Genres;