import { POST_IS_LOADING } from '../types';

export const postsLoading = status => ({
    type: POST_IS_LOADING,
    payload: status,
});
