import React, {FC} from 'react';


import css from './MoviesPage.module.css';
import {NavLink, Outlet} from "react-router-dom";
import {Genres, Movies} from "../../components";



const MoviesPage: FC = () => {

    return (
        <div>
            <div>
                slider
            </div>
            <div className={css.menu}>
                <NavLink to={'popular'}>Popular</NavLink>
                <div className={css.leftMenuUnderline}></div>
                <NavLink to={'upcoming'}>Upcoming</NavLink>
                <div className={css.leftMenuUnderline}></div>
                <NavLink to={'top-rated'}>Top Rated</NavLink>
            </div>
            <Genres/>
            <Movies/>
            <div><Outlet/></div>
        </div>
    );
};

export {MoviesPage};