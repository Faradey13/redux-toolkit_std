import {PostState} from "../../types/redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:PostState = {
    posts: [],
    isLoading: false,
    error: '',
    limit: 10,
    page: 1,
    totalPages: 0
}

export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers : {
        setPage(state,action:PayloadAction<number>) {
            state.page = action.payload
        },
        setLimit(state,action:PayloadAction<number>) {
            state.limit = action.payload
        },
        setTotalPage(state,action:PayloadAction<number>) {
            state.totalPages = action.payload
        },
    },
    extraReducers: {}
})

export default PostSlice.reducer