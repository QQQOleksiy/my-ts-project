import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import StarsRatingComponent from "../StarsRating/StarsRating";

import css from './movie_card.module.css'

interface IProps{
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, original_title, vote_average, release_date, poster_path} = movie

    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    const navigate = useNavigate();

    return (
        <div className={css.card}>
            <img onClick={() => navigate({pathname: '/details', search: `id=${id}`})} src={img_url} alt={'poster_path'}/>
            <div className={css.info}>
                <div className={css.title} onClick={() => navigate({pathname: '/details', search: `id=${id}`})}>{original_title}</div>
                <div className={css.rating}>
                    <StarsRatingComponent vote_average={vote_average} color={"#555555"} size={'12px'}/>
                    <div>{vote_average}/10</div>
                </div>
                <div>{release_date}</div>
            </div>
        </div>
    );
};

export default MoviesListCard;