import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { APIS } from '../serviceCalls';

const initialState = {
    blog_posts: [],
    error: null,
    loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getBlogPosts = async () => {
        try {
            const res = await APIS.getAllBlogPosts();

            dispatch({
                type: 'GET_BLOG_POSTS',
                data: res.posts || []
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error || { error: 'error occured...'}
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            blog_posts: state.blog_posts,
            error: state.error,
            loading: state.loading,
            getBlogPosts,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}