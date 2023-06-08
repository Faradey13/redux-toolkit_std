import exp from "constants";
import {RouteProps} from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostById from "../pages/PostById";
import About from "../pages/About";


export enum AppRoute {
    LOGIN = 'login',
    POST = 'post',
    POSTS = 'posts',
    ABOUT = 'about',
    ERROR = 'error'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.ABOUT]: '/about',
    [AppRoute.ERROR]: '/*',
    [AppRoute.POST]: '/posts/:id',
    [AppRoute.POSTS]: '/posts',
    [AppRoute.LOGIN]: '/login'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.LOGIN]: {
        path: RoutePath.login,
        element: <Login/>
    },
    [AppRoute.POSTS]: {
        path: RoutePath.posts,
        element: <Posts/>
    },
    [AppRoute.POST]: {
        path: RoutePath.post,
        element: <PostById/>
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <About/>
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <Posts/>
    }

}