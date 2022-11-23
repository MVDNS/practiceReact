import { profileAPI } from '../api/api'

const SEND_NEW_POST = 'SEND-NEW-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: 'this is first post', likesCount: 1 },
		{ id: 2, message: 'this is second post', likesCount: 5 },
		{ id: 3, message: 'this is third post', likesCount: 8 },
	],
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
				message: action.postText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ''
			}
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

export const addSendNewPost = (postText) => {
	return {
		type: SEND_NEW_POST,
		postText
	}
}

const setUserStatus = (userStatus) => {
	return {
		type: SET_USER_STATUS,
		userStatus
	}
}

export const getProfileUser = (userId) => async (dispatch) => {
	let promise = await profileAPI.getUserProfile(userId)
	dispatch(setProfileUser(promise))
}

export const getUserStatus = (userId) => async (dispatch) => {
	let promise = await profileAPI.getUserStatus(userId)
	dispatch(setUserStatus(promise.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
	let promise = await profileAPI.updateUserStatus(status)
	if (promise.data.resultCode === 0) {
		dispatch(setUserStatus(status))
	}

}


export default profileReducer;