import React, {FC, useEffect, useState} from 'react';


import css from './MoviesPage.module.css';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {Genres, Movies} from "../../components";

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {SubmitHandler, useForm} from "react-hook-form";

// interface ISearch {
//     search: string;
// }

const MoviesPage: FC = () => {
    // const [search, setSearch] = useState('harri');
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();
    // const {register, handleSubmit, reset} = useForm<ISearch>();
    //
    //
    //
    // useEffect(() => {
    //
    //         dispatch(movieActions.getBySearchMovie({search}))
    //
    // }, [dispatch, search])
    //
    // const onSubmit: SubmitHandler<ISearch> = (search) => {
    //
    //     if (search.search !== '') {
    //         console.log(search.search)
    //         setSearch(search.search);
    //         navigate('/search')
    //     }
    //     reset();
    // }


    return (
        <div>

            {/*<div className={css.menu}>*/}
            {/*    <NavLink to={'popular'}>Popular</NavLink>*/}
            {/*    <div className={css.leftMenuUnderline}></div>*/}
            {/*    <NavLink to={'upcoming'}>Upcoming</NavLink>*/}
            {/*    <div className={css.leftMenuUnderline}></div>*/}
            {/*    <NavLink to={'top-rated'}>Top Rated</NavLink>*/}
            {/*</div>*/}
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input className={css.inputSearch} type="text"*/}
            {/*           placeholder="Search your interesting... " {...register('search')}/>*/}
            {/*</form>*/}
            <Genres/>
            <Movies/>
            {/*<div><Outlet/></div>*/}
        </div>
    );
};

export {MoviesPage};