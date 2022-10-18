import React, {FC} from 'react';

import css from './MainLayout.module.css';
import {Footer, Header, Main} from "../../components";

const MainLayout: FC = () => {
    return (
        <div className={css.wrapper}>
            <div><Header/></div>
            <div className={css.main} id={'main'}><Main/></div>
            <div><Footer/></div>
        </div>
    );
};

export {MainLayout};