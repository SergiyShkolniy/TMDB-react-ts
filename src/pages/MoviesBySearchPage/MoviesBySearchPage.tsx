import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";

const MoviesBySearchPage: FC = () => {

    const {search} = useAppSelector(state => state.movieReducer);
    console.log(search)
    return (
        <div>
            search
        </div>
    );
};

export {MoviesBySearchPage};