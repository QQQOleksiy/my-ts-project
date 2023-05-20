import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";

import css from './genres.module.css'

interface IProps{
    genre: IGenre;
}

const OneGenre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={css.one_genres}>
            <Link to={{pathname: '/genre', search: `genre_key=${id}&page=1`}}>{name}</Link>
        </div>
    );
};

export default OneGenre;