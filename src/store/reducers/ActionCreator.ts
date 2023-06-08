import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IPost} from "../../types/users";
import {useEffect} from "react";
import {useAppSelector} from "../../components/hooks/redux";



const {page,limit,totalPages} = useAppSelector(state => state.postReducer)

export const fetchPosts = createAsyncThunk(

    'post/fetchALL',

    async ({page, limit}, thunkAPI) => {

        const response = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }
)