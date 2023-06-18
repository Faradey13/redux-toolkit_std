import {useMemo} from "react";
import {IPost} from "../../types/posts";


interface UseSortedPostsProps {
    posts: IPost[];
    sort?: keyof IPost;
    query?: string;
}

export const useSortedPosts = ({posts, sort}: UseSortedPostsProps) => {

    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPosts
}

export const usePosts = ({posts, sort, query}: UseSortedPostsProps) => {
    const sortedPosts = useSortedPosts({posts, sort})
    const sortedAndSearchedPosts = useMemo(() => {
if(query) {
    return [...sortedPosts].filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
}
    return sortedPosts
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}