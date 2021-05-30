import React, { createContext, useReducer } from 'react';
import Axios from 'axios';
import AppReducer from './AppReducer';
import { APIS } from '../serviceCalls';

const HOST = 'https://expense-tracker-server-96.herokuapp.com';

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
                data: res.posts
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error.response.data.error || { error: 'error occured...'}
            });
        }
    }

    // const deleteTransaction = async (id) => {
    //     try {
    //         await Axios.delete(`${HOST}/api/v1/transactions/${id}`);

    //         dispatch({
    //             type: 'DELETE_TRANSACTION',
    //             data: id
    //         });        
    //     } catch (error) {
    //         dispatch({
    //             type: 'TRANSACTION_ERROR',
    //             data: error.response.data.error
    //         });
    //     }
    // }

    const addTransaction = async (transaction) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await Axios.post(`${HOST}/api/v1/transactions`, transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                data: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            blog_posts: state.blog_posts,
            error: state.error,
            loading: state.loading,
            getBlogPosts,
            // deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}