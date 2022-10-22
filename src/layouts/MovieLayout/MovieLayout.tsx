import React, {FC, useEffect, useState} from 'react';

import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {movieActions} from "../../redux";
import {ReactComponent as Search} from '../../accest/icon/search.svg';
import css from './MovieLayout.module.css';

interface ISearch {
    search: string;
}

const MovieLayout:FC = () => {

    const [search, setSearch] = useState('harri');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset} = useForm<ISearch>();



    useEffect(() => {

        dispatch(movieActions.getBySearchMovie({search}))

    }, [dispatch, search])

    const onSubmit: SubmitHandler<ISearch> = (search) => {

        if (search.search !== '') {
            console.log(search.search)
            setSearch(search.search);
            navigate('/search')
        }
        reset();
    }
    return (
        <div className={css.container}>
            <div className={css.flex}>
                <div className={css.menu}>
                    <NavLink to={'all'}>All</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'popular'}>Popular</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'upcoming'}>Upcoming</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'top-rated'}>Top Rated</NavLink>
                </div>
                <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={css.inputSearch} type="text"
                           placeholder="Search your interesting... " {...register('search')}>
                    </input>
                    <Search className={css.search}/>
                </form>
            </div>
            <Outlet/>

        </div>
    );
};

export {MovieLayout};