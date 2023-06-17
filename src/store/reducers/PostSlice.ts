import {PostState} from "../../types/redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchComments, fetchHeaders, fetchPost, fetchPosts} from "./ActionCreator";
import {IComment, IPost} from "../../types/posts";

const initialState:PostState = {
    posts: [],
    post: {body: '', title: '', id: "-1"},
    isLoading: false,
    error: '',
    limit: 10,
    page: 1,
    totalCount: 100,
    totalPages: 10,
    comments: [],
    isAuth: false,
    isLoadingPage: true
}

export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers : {
        addPost(state, action:PayloadAction<IPost[]>) {
          state.posts = action.payload
        },
        setPage(state,action:PayloadAction<number>) {
            state.page = action.payload
        },

        setLimit(state,action:PayloadAction<number>) {
            state.limit = action.payload
        },
        setTotalPage(state,action: PayloadAction<number>) {
            state.totalPages = action.payload
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setIsLoadingPage(state, action: PayloadAction<boolean>) {
            state.isLoadingPage = action.payload
        }

    },
    extraReducers: {
        [fetchPosts.fulfilled.type] : (state, action: PayloadAction<IPost[]>) =>{
            state.posts = [...state.posts, ...action.payload];
            state.error = '';
            state.isLoading = false;
        },
        [fetchPosts.pending.type] : (state) =>{
            state.error = '';
            state.isLoading = true;
        },
        [fetchPosts.rejected.type] : (state, action : PayloadAction<string>) =>{
            state.error = action.payload;

        },




        [fetchHeaders.fulfilled.type] : (state, action : PayloadAction<number>) => {
            state.totalCount = action.payload
        },



        [fetchPost.fulfilled.type] : (state, action:PayloadAction<IPost>) => {
            state.post = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        [fetchPost.pending.type] : (state) => {
            state.error = '';
            state.isLoading = true;
        },
        [fetchPost.rejected.type] : (state, action:PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },


        [fetchComments.fulfilled.type] : (state, action:PayloadAction<IComment[]>) => {
            state.comments = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        [fetchComments.pending.type] : (state) => {
            state.error = '';
            state.isLoading = true;
        },
        [fetchComments.rejected.type] : (state, action:PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },


    }
})

export default PostSlice.reducer