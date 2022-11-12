import { UserApi } from "../api/api";
const SET_AUTH_USER_DATE = 'SET_AUTH_USER_DATE';
const RESET_AUTH_USER_DATA = 'RESET_AUTH_USER_DATA';

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
		case RESET_AUTH_USER_DATA:
			return {
				...state,
				userId: null,
				email: null,
				login: null,
				isAuth: false
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

export const resetAuthUserData = () => {
	return {
		type: RESET_AUTH_USER_DATA,
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

// export const getLoginUser = (userData) => {
// 	UserApi.getLogin(userData)
// 		.then(response => {
// 			if (response.resultCode === 0) {
// 				alert(`Вы авторизованны! Ваш id: ${response.data.userId}`)
// 			}
// 		})
// }

export const getLoginUser = (userData) => {
	return (dispatch) => {
		UserApi.getLogin(userData)
			.then(response => {
				if (response.resultCode === 0) {
					UserApi.authAxios()
						.then(response => {
							if (response.resultCode === 0) {
								let { email, id, login } = response.data
								dispatch(setAuthUserDate(email, id, login))
							}
						})
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
					dispatch(resetAuthUserData())
				}
			})
		alert(`Вы не авторизованы!`)
	}
}




export default authReducer