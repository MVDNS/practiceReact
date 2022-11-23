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
			}
		default:
			return state;
	}
}

export const setAuthUserDate = (email, userId, login, isAuth = false) => {
	return {
		type: SET_AUTH_USER_DATE,
		data: {
			email,
			userId,
			login,
			isAuth,
		}
	}
}


export const getAuth = () => async (dispatch) => {
	let promise = await UserApi.authAxios()
	if (promise.resultCode === 0) {
		let { email, id, login } = promise.data
		dispatch(setAuthUserDate(email, id, login, true))
	}
}

// export const getLoginUser = (userData) => {
// 	UserApi.getLogin(userData)
// 		.then(response => {
// 			if (response.resultCode === 0) {
// 				alert(`Вы авторизованны! Ваш id: ${response.data.userId}`)
// 			}
// 		})
// }

export const getLoginUser = (email, password, rememberMe, setErrors) => async (dispatch) => {
	let promise = await UserApi.getLogin(email, password, rememberMe)
	if (promise.data.resultCode === 0) {
		dispatch(getAuth())
	}
	else {
		setErrors({ apiError: `${promise.data.messages[0]}` })
	}
}

export const getLogOut = () => async (dispatch) => {
	let promise = await UserApi.getLogOut()
	if (promise.resultCode === 0) {
		dispatch(setAuthUserDate(null, null, null, false))
	}
}




export default authReducer