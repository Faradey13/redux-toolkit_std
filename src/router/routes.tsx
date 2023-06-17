
import {RouteProps} from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";

import About from "../pages/About";
import PostById from "../pages/PostById";

type PublicType = {public: boolean}
export enum AppRoute {
    LOGIN = 'login',
    POST = 'post',
    POSTS = 'posts',
    ABOUT = 'about',
    ERROR = 'error',
    ERRORPUBLIC = 'error_public'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.ABOUT]: '/about',
    [AppRoute.ERROR]: '/*',
    [AppRoute.ERRORPUBLIC]: '/*',
    [AppRoute.POST]: '/posts/:id',
    [AppRoute.POSTS]: '/posts',
    [AppRoute.LOGIN]: '/login'
}

export const routeConfig: Record<AppRoute, RouteProps & PublicType> = {
    [AppRoute.LOGIN]: {
        path: RoutePath.login,
        element: <Login/>,
        public: true

    },
    [AppRoute.POSTS]: {
        path: RoutePath.posts,
        element: <Posts/>,
        public: false
    },
    [AppRoute.POST]: {
        path: RoutePath.post,
        element: <PostById/>,
        public : false
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <About/>,
        public : false
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <Posts/>,
        public : false
    },
    [AppRoute.ERRORPUBLIC]: {
        path: RoutePath.error,
        element: <Login/>,
        public : true
    }

}
export const publicRoutes = Object.fromEntries(
    Object.entries(routeConfig).filter(([key, value]) => value.public))

