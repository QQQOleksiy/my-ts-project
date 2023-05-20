import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Search.module.css'

const SearchMovie = () => {
    const movie_input = useRef<HTMLInputElement>()

    const navigate = useNavigate();

    const foo = () => {
        navigate({pathname: '/movies_by_name', search: `name=${movie_input.current.value}`});
        movie_input.current.value = ''
    }

    return (
        <div>
            <input className={css.input_text} type="text" placeholder="Name movie..." ref={movie_input}/>
            <button className={css.button} onClick={foo}>Search</button>
        </div>
    );
};

export default SearchMovie;