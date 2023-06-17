import React, {FC, ReactEventHandler} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {useAppDispatch, useAppSelector} from "../components/hooks/redux";
import {PostSlice} from "../store/reducers/PostSlice";

const Login:FC = () => {

    const {isAuth} = useAppSelector(state => state.postReducer)
    const {setIsAuth} = PostSlice.actions
    const dispatch = useAppDispatch()
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setIsAuth(true))
        localStorage.setItem('auth', 'true')

    }


    return (
        <form onSubmit={login}>
            <div>
                <MyInput placeholder={'Login'} />
                <MyInput placeholder={'Password'} />
            </div>
            <MyButton children={'Login'}/>

        </form>
    );
};

export default Login;