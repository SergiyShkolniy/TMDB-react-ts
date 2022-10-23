import React, {FC} from 'react';

import css from './Cast.module.css';
import {ICast} from "../../interfaces";
import {urlImage} from "../../configs";

interface IProps {
    cast: ICast;
}

const Cast: FC<IProps> = ({cast}) => {

    return (
        <div className={css.container}>
            <img src={`${urlImage}${cast.profile_path}`} alt={cast.name} title={cast.name}/>
            <p>{cast.name}</p>
        </div>
    );
};

export {Cast};