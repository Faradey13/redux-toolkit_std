import React, {FC, FormHTMLAttributes, MouseEventHandler, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

import {IPost} from "../types/posts";

interface NewPostFormProps  {
    create:(arg0:IPost) => void;
}

const PostForm:FC<NewPostFormProps> = ({create}) => {
    const [post, setPost] = useState<Omit<IPost, "id">>({title: '', body: ''})

    const addNewPost:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        const newPost: IPost = {
            id: String(Date.now()),
            ...post

        }
        create && create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <form>
            <div>
                <MyInput onChange={(event) =>
                    setPost({...post, title: event.target.value})} value={post.title} placeholder={'Заголовок'}/>
                <MyInput onChange={(event) =>
                    setPost({...post, body: event.target.value})} value={post.body} placeholder={'Описание'}/>
            </div>
            <MyButton onClick={addNewPost} children={'Создать'}/>
        </form>
    );
};

export default PostForm;