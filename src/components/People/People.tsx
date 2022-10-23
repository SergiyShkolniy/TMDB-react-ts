import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './People.module.css';
import {IPeople} from "../../interfaces";
import {urlImage} from "../../configs";


interface IProps {
    people: IPeople;
}

const People:FC<IProps> = ({people}) => {

    return (
        <div className={css.link}>
            <Link to={`/people/${people.id}`}>
                <div className={css.container}>
                    <img src={`${urlImage}${people.profile_path}`} alt={people.name} title={people.name}/>
                    <p>{people.name}</p>
                </div>
            </Link>
        </div>
    );
};

export {People};