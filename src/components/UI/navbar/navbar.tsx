import React, {FC} from 'react';
import MyButton from "../button/MyButton";
import cl from './navbarStyle.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PostSlice} from "../../../store/reducers/PostSlice";
import {useNavigate} from "react-router-dom";

const Navbar: FC = () => {

    const navigate = useNavigate()


    const {isAuth} = useAppSelector(state => state.postReducer)
    const {setIsAuth} = PostSlice.actions

    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(setIsAuth(false))
        localStorage.removeItem('auth')
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__buttons_block}>
                {!isAuth ?
                    <MyButton children='Login'/>
                    :
                    <MyButton onClick={logout} children='Logout'/>
                }
            </div>
            <div>
                <MyButton onClick={() => navigate('/about')} children={'About'}/>
                <MyButton onClick={() => navigate('/posts')} children={'Posts'}/>
            </div>
        </div>
    );
};

export default Navbar;