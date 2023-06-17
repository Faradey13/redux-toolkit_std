import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IComment, IPost} from "../../types/posts";




export interface fetchParams {
    limit: number;
    page: number;
}

export const fetchPosts = createAsyncThunk(

    'posts/fetchALL',

    async ({page, limit}:fetchParams, thunkAPI) => {

        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

        return response.data
    }
)

export const fetchHeaders = createAsyncThunk(

    'headers/fetchALL',

    async (_, thunkAPI) => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        return response.data.length
    }
)

export const fetchPost = createAsyncThunk(
    'post/fetchAll',
    async (id:number) => {
        const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)

        return response.data
    }

)
export const fetchComments = createAsyncThunk(
    'comments/FetchAll',
    async (id:number) => {
        const response = await axios.get<IComment>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response.data
    }

)