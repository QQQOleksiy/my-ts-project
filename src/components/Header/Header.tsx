import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import SearchMovie from "../SearchMovie/SearchMovie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

import css from './header.module.css'

const Header: FC = () => {

    const dispatch = useAppDispatch();

    const {theme} = useAppSelector(state => state.movieReducer)

    return (
        <div className={css.header}>
            <Link to={{ pathname: '/movies', search: '?page=1' }}>Movies</Link>

            <div className={css.container_user_search}>
                <div className={css.change_theme} onClick={() => dispatch(movieActions.changeTheme())}>{theme ? <FontAwesomeIcon icon={faMoon} color={'white'}/> : <FontAwesomeIcon icon={faSun} color={'white'}/>}</div>
                <SearchMovie/>
                <div className={css.user}>U</div>
            </div>
        </div>
    );
};

export default Header;