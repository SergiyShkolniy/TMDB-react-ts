import React, {FC, useEffect, useState} from 'react';

import css from "../../components/Movies/Movies.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {People} from "../../components";
import {peopleActions} from "../../redux";

const PeoplePage: FC = () => {

    const {peoples, page, total_pages} = useAppSelector(state => state.peopleReducer);
    const dispatch = useAppDispatch();

    const [pageTotal, setPageTotal] = useState(1);

    useEffect(() => {
        dispatch(peopleActions.getAll({pageTotal}));
    }, [pageTotal, dispatch]);

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
            {peoples &&
                <div className={css.flex}>
                    {peoples.map(people => <People key={people.id} people={people}/>)}
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

export {PeoplePage};