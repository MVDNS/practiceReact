const SET_AUTH_USER_DATE = 'SET_AUTH_USER_DATE';

const inintialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}


const authReducer = (state = inintialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATE:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state;
	}
}

export const setAuthUserDate = (email, userId, login) => {
	return {
		type: SET_AUTH_USER_DATE,
		data: {
			email,
			userId,
			login,
		}
	}
}


export default authReducer