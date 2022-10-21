import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from "../Movies/Movies.module.css";
import {Movie} from "../Movie/Movie";

const MoviesByGenre: FC = () => {
    const {id} = useParams();
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const [pageTotal, setPageTotal] = useState(1);

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({pageTotal, id}))
    }, [pageTotal, dispatch, id]);

    const forward = () => {
        if (page < 500) {
            setPageTotal(page + 1);
        }
    };

    const back = () => {
        if (page > 1) {
            setPageTotal(page - 1);
        }

    };


    return (
        <>
            {movies &&
                <div className={css.flex}>
                    {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            }
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div className={css.pagesBlock}>
                    <div className={css.page}>{page}</div>
                    of
                    <div className={css.page}>{total_pages}</div>
                </div>
                <button className={css.button} onClick={forward}>forward</button>
            </div>
        </>
    );
};

export {MoviesByGenre};