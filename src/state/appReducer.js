import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state;
	}
}

const initializedSuccess = () => {
	return {
		type: INITIALIZED_SUCCESS
	}
}

export const initializeApp = () => {
	return (dispatch) => {
		let dispatchRes = dispatch(getAuth());
		//dispatch(anyFunc());
		//dispatch(anyFunc());
		dispatchRes
			.then(() => {
				dispatch(initializedSuccess());
			})

	}
}

export default appReducer