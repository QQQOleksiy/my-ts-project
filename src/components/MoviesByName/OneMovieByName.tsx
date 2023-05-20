import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './one_movie.module.css'

interface IProps {
    id: number;
    name: string;
}

const OneMovieByName: FC<IProps> = (movie) => {
    const {id, name} = movie

    return (
        <div className={css.movie_name_list}>
            <Link to={{ pathname: '/details', search: `?id=${id}`}}>{name}</Link>
        </div>
    );
}

export default OneMovieByName;