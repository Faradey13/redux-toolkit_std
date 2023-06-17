import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import {IPost} from "../types/posts";
import  '../styles/posts.css'
import {useNavigate} from "react-router-dom";

export interface PostItemProps {
    post : IPost;
    remove: (arg0:IPost) => void

}

const PostItem:FC<PostItemProps> = ({post,remove}) => {
    const navigate = useNavigate()
    return (
        <div className={'post'}>
            <div >
                <h2>{post.id}. {post.title}</h2>
                <span>{post.body}</span>
            </div>
            <div className={'post__button_block'}>
                <MyButton onClick={() => navigate(`/posts/${post.id}`)} children={'Открыть'}/>
                <MyButton onClick={() => remove(post)} children={'Удалить'}/>
            </div>
        </div>
    );
};

export default PostItem;