import { POST_IS_LOADING, SET_POST } from '../types';

export const postsLoading = status => ({
    type: POST_IS_LOADING,
    payload: status,
});

export const postFetch = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
    .then(response => response.json())
    .then((responseJson) => {
      dispatch({
          type: SET_POST,
          payload: responseJson,
      });
      dispatch(postsLoading(false));
    });
};
