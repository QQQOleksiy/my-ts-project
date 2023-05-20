import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/mainLayout/MainLayout";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MoviesByGenrePage from "./pages/moviesByGenrePage/MoviesByGenrePage";
import DetailsMoviePage from "./pages/detailsMoviePage/DetailsMoviePage";
import MovieByNamePage from "./pages/moviesByNamePage/MovieByNamePage";

import css from './App.module.css'
import {useAppSelector} from "./hooks";

const App = () => {

    const {theme} = useAppSelector(state => state.movieReducer)

    return (
        <div className={theme ? css.light : css.dark}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies?page=1'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'genre'} element={<MoviesByGenrePage/>}/>
                    <Route path={'details'} element={<DetailsMoviePage/>}/>
                    <Route path={'movies_by_name'} element={<MovieByNamePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;