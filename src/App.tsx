import React, {useEffect} from 'react';
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/navbar";
import './styles/app.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useAppDispatch, useAppSelector} from "./components/hooks/redux";
import {PostSlice} from "./store/reducers/PostSlice";


function App() {
    const {isAuth,isLoading} = useAppSelector(state => state.postReducer)
    const {setIsAuth} = PostSlice.actions
    const {setIsLoadingPage} = PostSlice.actions
    const dispatch = useAppDispatch()



    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(setIsAuth(true))
            dispatch(setIsLoadingPage(false))
        }
    },[ ])

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>

                <AppRouter/>
            </BrowserRouter>

        </div>
    );
}

export default App;
