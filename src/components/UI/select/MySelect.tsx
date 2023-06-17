import React, {FC, SelectHTMLAttributes} from 'react';
import cl from './MySelectStyle.module.css'

interface options {
    value: string | number;
    name: string;
}

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: options[]
}

const MySelect: FC<MySelectProps> = ({
                                         defaultValue,
                                         options,
                                         value,
                                         onChange,
                                     }) => {
    return (

            <select className={cl.select} value={value} onChange={(event) =>
                onChange && onChange(event)}>
                <option disabled value="" >{defaultValue}</option>
                {
                    options.map(option => <option key={option.name} value={option.value}>{option.name}</option>)
                }
            </select>

    );
};

export default MySelect;