import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {urlImage} from "../../configs";
import css from './MovieDetailsPage.module.css';
import {Cast} from "../../components/Cast/Cast";

const MovieDetailsPage: FC = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie, credits} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getDetails({id}));
        dispatch(movieActions.getCredits({id}));
    }, [dispatch, id]);

    return (
        <div>
            <div className={css.backdrop}>
                <img src={`${urlImage}${movie?.backdrop_path}`} alt={movie?.title}/>
                <div className={css.title}>{movie?.title}</div>
            </div>

            <div className={css.container}>
                <div className={css.flex}>
                    <div className={css.poster}>
                        <img src={`${urlImage}${movie?.poster_path}`} alt={movie?.title}/>
                    </div>
                    <div>
                        <div className={`${css.releaseDate} ${css.flexInfo}`}>
                            <div className={css.bold}>release:</div>
                            {movie?.release_date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>runtime:</div>
                            {movie?.runtime} min
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>budget:</div>
                            {movie?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>revenue:</div>
                            {movie?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                        </div>
                    </div>
                </div>
                <div className={css.overview}>
                    <p>Overview:</p>
                    <div>{movie?.overview}</div>
                </div>
                <div>
                    <div className={css.castTitle}>
                        <p>Cast list:</p>
                    </div>
                    {credits &&
                        <div className={css.cast}>{credits.map(cast => <Cast key={cast.id} cast={cast}/>)}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export {MovieDetailsPage};