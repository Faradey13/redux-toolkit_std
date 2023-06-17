import React, {FC} from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import {IFilter, IPost} from "../types/posts";

interface FilterProps {
    filter: IFilter
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

const Filter: FC<FilterProps> = ({filter, setFilter}) => {
    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', gap: '3px', marginTop: '20px'}}>
            <MySelect
                defaultValue={"Сортировка по:"}
                      options={[{value: 'body', name: "По постам"},
                              {value: 'title', name: "По заголовкам"}]
                      }
                      onChange={event =>
                          setFilter({...filter, sort: event.target.value as keyof IPost})}
            />
            <MyInput value={filter.query}
                     placeholder="Поиск"
                     onChange={event =>
                         setFilter({...filter, query: event.target.value as keyof IPost})}
            />

        </div>
    );
};

export default Filter;