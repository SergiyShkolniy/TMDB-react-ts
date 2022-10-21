import React, {FC} from 'react';
import {Genres} from "../../components";
import {MoviesByGenre} from "../../components/MoviesByGenre/MoviesByGenre";

const MoviesByGenrePage:FC = () => {
    return (
        <div>
            <Genres/>
            <MoviesByGenre/>
        </div>
    );
};

export {MoviesByGenrePage};