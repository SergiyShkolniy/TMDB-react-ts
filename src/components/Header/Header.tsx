import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {ReactComponent as Logo} from '../../accest/icon/logo.svg';
import {ReactComponent as Avatar} from '../../accest/icon/avatar.svg';
import {useTheme} from "../../hooks";

const Header: FC = () => {

    const {theme, setTheme} = useTheme();

    const lightClick = () => {
        setTheme('light')
    };

    const darkClick = () => {
        setTheme('dark')
    };

    return (
        <div className={css.wrapper}>
            <div className={`${css.container} ${css.flex}`}>
                <div className={`${css.headerLeft} ${css.flex}`}>
                    <NavLink to={'/'} className={css.logo}><Logo/></NavLink>
                    <div className={css.menu}>
                        <NavLink to={'movie'}>Movies</NavLink>
                        <div className={css.leftMenuUnderline}></div>
                        <NavLink to={'tv'}>TV Shows</NavLink>
                        <div className={css.leftMenuUnderline}></div>
                        <NavLink to={'people'}>People</NavLink>
                    </div>
                </div>
                <div className={css.headerRight}>
                    <div>{theme==='light'? <p onClick={darkClick} className={css.darkAndLight}>Dark theme</p> :
                        <p onClick={lightClick} className={css.darkAndLight}>Light theme</p> }
                    </div>
                    <div className={css.leftMenuUnderline}></div>
                    <div className={css.flex}>
                        <div className={css.avatar}><Avatar/></div>
                        <div className={css.avatarInfo}>
                            <p>Serhii Shkolnyi</p>
                            <p className={css.avatarSubTitle}>UA Odessa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};