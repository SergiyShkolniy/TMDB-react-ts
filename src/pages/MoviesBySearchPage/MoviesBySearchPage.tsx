import React, {FC} from 'react';

import css from './MoviesBySearchPage.module.css';
import { useAppSelector} from "../../hooks";
import {Movie} from "../../components";

const MoviesBySearchPage: FC = () => {

    const {search} = useAppSelector(state => state.movieReducer);

    return (
        <>
            {search &&
                <div className={css.flex}>
                    {search.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            }
        </>
    );
};

export {MoviesBySearchPage};