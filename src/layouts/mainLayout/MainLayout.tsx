import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import Genres from "../../components/Genres/Genres";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import css from './main_layout.module.css'

const MainLayout: FC = () => {
    return (
        <div>
            <div>
                <Header/>
                <div className={css.main}>
                    <div className={css.genres}>
                        <Genres/>
                    </div>
                    <div className={css.outlet}>
                        <Outlet/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;