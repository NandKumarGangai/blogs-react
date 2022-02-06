import { lazy } from 'react';

const HomePageComponent = lazy(() => import('../pages/HomePage'));
const BlogPageComponent = lazy(() => import('../pages/BlogPage'));

export const appRoutes = [
    {
        route: '/',
        isPrivate: false,
        Component: HomePageComponent
    },
    {
        route: '/blog/:title',
        isPrivate: false,
        Component: BlogPageComponent
    }
];