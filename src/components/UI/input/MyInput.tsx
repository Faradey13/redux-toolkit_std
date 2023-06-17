import React, {FC, InputHTMLAttributes} from 'react';
import cl from './MyInputStyles.module.css'

const MyInput:FC<InputHTMLAttributes<HTMLInputElement>> = ({placeholder, value, onChange}) => {
    return (
        <div>
            <input className={cl.input} value={value} type="text" onChange={(event) => onChange && onChange(event)} placeholder={placeholder}/>
        </div>
    );
};

export default MyInput;