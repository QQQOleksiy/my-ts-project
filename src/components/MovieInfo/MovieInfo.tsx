import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import OneGenre from "../Genres/OneGenre";

import css from './movie_info.module.css'
import StarsRatingComponent from "../StarsRating/StarsRating";
import Loader from "../Loader/Loader";

const MovieInfo = () => {
    const location = useLocation()
    const id = new URLSearchParams(location.search).get('id')

    const {detailsMovie, loading} = useAppSelector(state => state.movieReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getDetailsMovie(id))
    }, [dispatch, id])

    if (loading) {
        return (
            <Loader/>
        )
    } else {
        if (detailsMovie) {

            const {
                original_title,
                genres,
                overview,
                poster_path,
                backdrop_path,
                release_date,
                vote_average
            } = detailsMovie;

            const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

            const img_bg = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`

            return (
                <div className={css.main_bg} style={{backgroundImage: `url("${img_bg}")`}}>
                    <div className={css.bg_gradient}>
                        <div className={css.container}>

                            <img src={img_url} alt="poster_path"/>

                            <div className={css.info}>
                                <div className={css.title}>{original_title}</div>
                                <div className={css.any_info}>
                                    <div>Genre: {genres.map(value => <OneGenre key={value.id} genre={value}/>)}</div>
                                    <StarsRatingComponent vote_average={vote_average} color={'gold'} size={'20px'}/>
                                    <div>Overview: {overview}</div>
                                    <div>Release_date: {release_date}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );

        } else {
            return (
                <div className={css.not_found}>
                    <div>Not Found Movie</div>
                </div>
            );
        }
    }
};

export default MovieInfo;