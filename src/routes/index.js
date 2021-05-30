import { lazy } from 'react';
import CreateNewBlogPageComponent from '../pages/CreateNewBlogPage';

const HomePageComponent = lazy(() => import('../pages/HomePage'));
const LoginPageComponent = lazy(() => import('../pages/LoginPage'));
const BlogPageComponent = lazy(() => import('../pages/BlogPage'));
const BlogsOverviewComponent = lazy(() => import('../pages/BlogsOverview'));
// const CreateNewBlogPageComponent = lazy(() => import('../pages/CreateNewBlogPage'));

export const appRoutes = [
    {
        route: '/',
        isPrivate: false,
        Component: HomePageComponent
        // Component: CreateNewBlogPageComponent
    },
    {
        route: '/admin/login',
        isPrivate: false,
        Component: LoginPageComponent
    },
    {
        route: '/blog/:title',
        isPrivate: false,
        Component: BlogPageComponent
    },
    {
        route: '/admin/overview',
        isPrivate: false,
        Component: BlogsOverviewComponent
    },
    {
        route: '/admin/new',
        isPrivate: false,
        Component: CreateNewBlogPageComponent
    }
];