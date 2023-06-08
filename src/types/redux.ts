import {IPost} from "./users";



export interface PostState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
    totalPages: number;
}