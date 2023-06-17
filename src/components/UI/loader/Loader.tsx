import React, {FC} from 'react';
import cl from './LoaderSryle.module.css'
const Loader:FC = () => {
    return (
        <div className={cl.loader_wrap}>
            <div className={cl.loader}>

            </div>
        </div>
    );
};

export default Loader;