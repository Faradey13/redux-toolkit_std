import React, {ButtonHTMLAttributes, FC} from 'react';
import cl from './ButtonStyle.module.css';
const MyButton:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, onClick}) => {
    return (
        <div>
            <button children={children} onClick={onClick}  className={cl.my_button}/>
        </div>
    );
};

export default MyButton;