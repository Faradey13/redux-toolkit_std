import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../components/hooks/redux";
import {fetchComments, fetchPost} from "../store/reducers/ActionCreator";
import {IPost} from "../types/posts";
import Loader from "../components/UI/loader/Loader";

const PostById:FC = () => {
    const param = useParams()

    const {post, isAuth, comments, isLoading} =
        useAppSelector(state => state.postReducer)

    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch((fetchPost(Number(param.id))))
        dispatch(fetchComments(Number(param.id)))

    },[])


    return (
        <div>
            {   isLoading && <Loader/>}
            {<h1 style={{marginTop: '10px'}}>{param.id}. {post && post.title
                } </h1>}
            <span style={{marginTop: '10px'}}>{post && post.body}</span>
            <br style={{width: '800px', height: '1px'}}/>
            {comments.map((comm) => (
                <div key={comm.id} style={{marginTop: '10px'}} >
                    <h2 style={{marginTop: '10px'}}>{comm.name}</h2>
                    <h2 style={{marginTop: '10px'}}>{comm.email}</h2>
                    <span style={{marginTop: '10px'}}>{comm.body}</span>
                </div>

            ))}


        </div>
    );
};

export default PostById;