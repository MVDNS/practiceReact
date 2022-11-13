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


export const getAuth = () => {
	return (dispatch) => {
		UserApi.authAxios()
			.then(response => {
				if (response.resultCode === 0) {
					let { email, id, login } = response.data
					dispatch(setAuthUserDate(email, id, login, true))
				}
			})
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

export const getLoginUser = (email, password, rememberMe) => {
	console.log(email, password, rememberMe)
	return (dispatch) => {
		UserApi.getLogin(email, password, rememberMe)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(getAuth())
					alert(`Вы авторизованы!`)
				}
			})
	}
}

export const getLogOut = () => {
	return (dispatch) => {
		UserApi.getLogOut()
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(setAuthUserDate(null, null, null, false))
				}
			})
	}
}




export default authReducer