import React, {useEffect, useRef, useState} from 'react';
import {PostSlice} from "../store/reducers/PostSlice";
import {useAppDispatch, useAppSelector} from "../components/hooks/redux";
import {fetchHeaders, fetchPosts} from "../store/reducers/ActionCreator";
import {pageArrays, totalPage} from "../utils";

import PostList from "../components/PostList";
import {IFilter, IPost} from "../types/posts";
import Filter from "../components/Filter";
import {usePosts} from "../components/hooks/usePosts";

import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import MyButton from "../components/UI/button/MyButton";
import {usePagination} from "../components/hooks/usePagination";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/Pagination";
import {current} from "@reduxjs/toolkit";
import {useObserve} from "../components/hooks/useObserve";
import {routeConfig} from "../router/routes";
import MySelect from "../components/UI/select/MySelect";


const Posts = () => {

    const {setTotalPage} = PostSlice.actions
    const {addPost} = PostSlice.actions
    const {setLimit} = PostSlice.actions
    const {setPage} = PostSlice.actions
    const dispatch = useAppDispatch()
    const {post,posts, error, limit, isLoading, page, totalCount, totalPages} = useAppSelector(state => state.postReducer)


    const [modal, setModal] = useState<boolean>(false)
    const [filter, setFilter] = useState<IFilter>({
        sort: undefined, query: ''
    })


    const sortedAndSearchedPosts = usePosts({posts: posts, sort: filter.sort, query: filter.query})


    useEffect(() => {
        dispatch(fetchPosts({limit: limit, page: page}))

    }, [limit, page])

    useEffect(() => {
        dispatch(fetchHeaders())
        dispatch(setTotalPage(totalPage(limit, totalCount)))

    }, [limit, totalCount])

    const addNewPost: (arg0: IPost) => void = (newPost) => {
        dispatch(addPost([...posts, newPost]))
        setModal(false)
    }

    const removePost = (post: IPost) => {
        dispatch(addPost(posts.filter(p => p.id !== post.id)))
    }

    const pageArray = usePagination(totalPages)

    const changePage = (pg: number) => {
        dispatch(setPage(pg))
    }

    const lastElement = useRef(null)


    useObserve(page<totalPages, lastElement, () => dispatch(setPage(page+1)), isLoading)


    console.log(limit)
    return (

        <div>
            <div className={"post__action"}>
                <Filter setFilter={setFilter} filter={filter}/>
                <MyButton onClick={() => setModal(true)} children={'Добавить пост'}/>
                <MySelect defaultValue={'Выводить по:'} options={[
                    {value: 5, name: 'по 5'},
                    {value: 10, name: 'по 10'},
                    {value: 25, name: 'по 25'},
                    {value: -1, name: 'все'},
                ]}
                onChange={(event) => dispatch(setLimit(Number(event.target.value)))}
                />

            </div>
            <MyModal visible={modal} setVisible={setModal} children={<PostForm create={addNewPost}/>}/>
            {isLoading && <Loader/>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            <div style={{width: '800', height: '10px', background: 'red'}} ref={lastElement}></div>

            <Pagination changePage={changePage} pageArray={pageArray} page={page}/>


        </div>
    );
};

export default Posts;