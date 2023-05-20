import React, {FC} from 'react';

import css from './loader.module.css'

const Loader: FC = () => {
    return (
        <div className={css.main_loader}>
            <div className={css.loader}></div>
        </div>
    );
};

export default Loader;