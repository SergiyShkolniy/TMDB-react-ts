import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";
import css from './Genre.module.css';

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {

    return (
        <div className={css.genre}>
            <NavLink to={`/movie/genre/${genre.id}`}>{genre.name}</NavLink>
        </div>
    );
};

export {Genre};