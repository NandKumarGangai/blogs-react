import axios from 'axios';
import _get from 'lodash/get';
import config from '../config/default.json';
// import { STORAGE } from '../Utils/storage';

const addAuthHeader = () => {
    const token = null; //STORAGE.getToken();
    return token
        ? {
            'Authorization': `${token}`
        }
        : {};
};

const defaultHeaders = {
    'Content-Type': 'application/json',
    ...addAuthHeader()
};

const defaultMethod = 'post';

export const serviceCallPaths = {
    GET_ALL_BLOG_POSTS: _get(config, 'services.get_all_blog_posts.path', ''),
};

export const convertToJson = response => {
    try {
        return JSON.parse(JSON.stringify(response));
    } catch (error) {
        throw new Error({
            success: false,
            cause: error
        });
    }
};

export const makeServiceCall = ({
    host = '',
    path,
    method = defaultMethod,
    body,
    headers = defaultHeaders
}) => {
    const modHeaders = {
        ...headers,
        ...addAuthHeader()
    }

    return axios({
        method,
        url: `${host}${path}`,
        data: body,
        headers: modHeaders
    });
};