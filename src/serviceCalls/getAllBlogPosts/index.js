import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelpers';
import { navigateToErrorPage } from '../navigations';
import { PROXY } from '../../Utils';

const handleResponse = () =>
    (res) => {
        const payload = _get(res, 'data.body', {});
        return payload;
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const getAllBlogPosts = (history) => {
    const request = {
        path: `${PROXY}${serviceCallPaths.GET_ALL_BLOG_POSTS}`,
        method: 'get',
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse())
        .catch(handleError(history));
}