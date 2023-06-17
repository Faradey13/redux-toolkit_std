import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, routeConfig} from "../router/routes";

import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {PostSlice} from "../store/reducers/PostSlice";
import Loader from "./UI/loader/Loader";


const AppRouter = () => {

    const {isAuth,isLoadingPage} = useAppSelector(state => state.postReducer)

    if (isLoadingPage) {
        return <Loader/>
    }

    return (
        isAuth ?
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                element={<div className='wPAge'>{element}</div>}
                path={path}
                key={path}
                />
            ))}
        </Routes>
            :
        <Routes>
            {Object.values(publicRoutes).map(({element, path}) =>  (
                <Route
                element={<div className='wPage'>{element}</div>}
                path={path}
                key={path}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;