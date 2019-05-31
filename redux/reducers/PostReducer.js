import { POST_IS_LOADING, SET_POST } from '../types';

const INITAL_STATE = {
	isLoading: false,
	posts: [],
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		case POST_IS_LOADING:
			return { ...state, isLoading: action.payload };
		case SET_POST:
			const orderedPost = action.payload.sort((a, b) => {
				const textA = a.title.toUpperCase();
				const textB = b.title.toUpperCase();
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			});
			return {
				...state,
				posts: orderedPost,
			};
		default:
			return state;
	}
};
