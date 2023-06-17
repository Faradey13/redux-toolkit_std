import {IComment, IPost} from "./posts";



export interface PostState {
    posts: IPost[];
    post: IPost;
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    comments: IComment[]
    isAuth: boolean;
    isLoadingPage: boolean
}