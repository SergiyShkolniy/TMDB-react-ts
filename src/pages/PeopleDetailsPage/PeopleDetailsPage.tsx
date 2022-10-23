import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {peopleActions} from "../../redux/slices/people.slice";
import {urlImage} from "../../configs";
import css from './PeopleDetails.module.css';

const PeopleDetailsPage: FC = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const {people} = useAppSelector(state => state.peopleReducer);

    useEffect(() => {
        dispatch(peopleActions.getDetails({id}));
    }, [dispatch, id]);


    return (
        <div className={css.flex}>
            <div>
                <img src={`${urlImage}${people?.profile_path}`} alt={people?.name}/>
            </div>
            <div className={css.peopleInfo}>
                <h2>{people?.name}</h2>
                <div>{people?.place_of_birth}</div>
                <div>{people?.birthday?.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</div>
                <div>popularity: {people?.popularity}</div>
                <h4>Biography:</h4>
                <div>{people?.biography}</div>


            </div>
        </div>
    );
};

export {PeopleDetailsPage};