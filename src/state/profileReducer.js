import { profileAPI } from '../api/api'

const SEND_NEW_POST = 'SEND-NEW-POST';
const STATE_NEW_POST = 'STATE-NEW-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: 'this is first post', likesCount: 1 },
		{ id: 2, message: 'this is second post', likesCount: 5 },
		{ id: 3, message: 'this is third post', likesCount: 8 },
	],
	newPostText: '',
	userStatus: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SEND_NEW_POST:
			let newPost =
			{
				id: 4,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ''
			}
		case STATE_NEW_POST:
			return {
				...state,
				newPostText: action.text
			};
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.userStatus
			};
		default:
			return state;
	}

}

export const setProfileUser = (profile) => {
	return {
		type: SET_PROFILE,
		profile
	}
}

export const updateStateNewPost = (text) => {
	return {
		type: STATE_NEW_POST,
		text
	}
}

export const addSendNewPost = () => {
	return {
		type: SEND_NEW_POST,
	}
}

const setUserStatus = (userStatus) => {
	return {
		type: SET_USER_STATUS,
		userStatus
	}
}

export const getProfileUser = (userId) => {
	return (dispatch) => {
		profileAPI.getUserProfile(userId)
			.then(response => {
				dispatch(setProfileUser(response))
			})
	}
}

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getUserStatus(userId)
			.then(response => {
				dispatch(setUserStatus(response.data))
			})
	}
}

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateUserStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setUserStatus(status))
				}
			})
	}
}

export default profileReducer;