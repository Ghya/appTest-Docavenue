import { POST_IS_LOADING } from '../types';

const INITAL_STATE = {
	isLoading: false,
	posts: [],
};

export default (state = INITAL_STATE, action) => {
	switch (action.type) {
		case POST_IS_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
