import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelpers';
import {
    navigateToAdminOverviewPage,
    navigateToErrorPage
} from '../navigations';

const handleResponse = (history, reset) =>
    () => {
        reset();
        navigateToAdminOverviewPage(history);
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const addNewBlog = (reqBody = {}, history, resetFormValues) => {

    const fileData = _get(reqBody, 'thumbnail', null);
    console.log('fileData: ', fileData);
    const serviceCalls = [];
    const formData = new FormData();
    if (fileData) {
        formData.append("thumbnail", fileData);

        // const uploadImage = makeServiceCall({
        //     path: serviceCallPaths.UPLOAD_BLOG_THUMBNAIL,
        //     method: 'put',
        //     body: formData,
        //     headers: {
        //         'Content-Type': 'Multipart/form-data'
        //     }
        // });
        // serviceCalls.push(uploadImage);

        delete reqBody.thumbnail;
    }
    formData.append("document", JSON.stringify(reqBody));
    const request = {
        path: serviceCallPaths.CREATE_NEW_BLOG,
        method: 'post',
        body: formData
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues))
        .catch(handleError(history));
}