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
    CREATE_NEW_BLOG: _get(config, 'services.create_new_blog.path', ''),
    GET_ALL_BLOG_POSTS: _get(config, 'services.get_all_blog_posts.path', ''),
    UPLOAD_BLOG_THUMBNAIL: _get(config, 'services.upload_blog_thumbnail', ''),
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
console.info('Default Headers: ', defaultHeaders);

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
    console.log('headers: ', modHeaders);
    return axios({
        method,
        url: `${host}${path}`,
        data: body,
        headers: modHeaders
    });
};