import React, {FC} from 'react';

import css from './Footer.module.css';

const Footer: FC = () => {

    return (
        <div className={css.footer}>
           <div>Serhii Shkolnyi 2022 (c) s.shkolniy@gmail.com</div>
        </div>
    );
};

export {Footer};