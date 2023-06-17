import {pageArrays} from "../utils";

export interface IPost {
    title: string;
    body: string;
    id: string;
    length?: any
}

export interface IFilter {
    sort: keyof IPost | undefined;
    query: keyof IPost | undefined;
}

export interface IComment {
    id: number;
    name: string;
    email: string;
    body: string
}