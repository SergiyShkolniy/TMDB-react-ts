import React, {FC, useEffect} from 'react';

import css from './Genres.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Genre} from "../Genre/Genre";


const Genres: FC = () => {

    const {genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenres());
    }, [dispatch]);

    return (
        <div>
            {genres &&
                <div className={css.genres}>
                    {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            }
        </div>
    );
};

export {Genres};