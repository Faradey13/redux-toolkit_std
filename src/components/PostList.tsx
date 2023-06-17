import React, {FC} from 'react';
import {IPost} from "../types/posts";
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export interface PostListProps {
    posts: IPost[];
    remove: (arg0: IPost) => void
}

const PostList: FC<PostListProps> = ({posts, remove}) => {
    return (

        <div>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition
                        key={post.id}

                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>


    );
};

export default PostList;