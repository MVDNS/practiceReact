import { UserApi } from "../api/api";
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

export const getAuth = () => {
	return (dispatch) => {
		UserApi.authAxios()
			.then(response => {
				if (response.resultCode === 0) {
					let { email, id, login } = response.data
					dispatch(setAuthUserDate(email, id, login))
				}
			})
	}
}

export const getLoginUser = (userData) => {
	return (dispatch) => {
		UserApi.getLogin()
	}
}




export default authReducer