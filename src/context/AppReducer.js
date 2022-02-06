const AppReducer = (state, { type, data }) => {
    switch (type) {
        case 'GET_BLOG_POSTS':
            return {
                ...state,
                blog_posts: [ ...data ]
            }

        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: data
            }
        default:
            return state;
    }
};

export default AppReducer;