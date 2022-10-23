import { UserApi } from '../api/api'

const SEND_NEW_POST = 'SEND-NEW-POST';
const STATE_NEW_POST = 'STATE-NEW-POST';
const SET_PROFILE = 'SET_PROFILE';


let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: 'this is first post', likesCount: 1 },
		{ id: 2, message: 'this is second post', likesCount: 5 },
		{ id: 3, message: 'this is third post', likesCount: 8 },
	],
	newPostText: '',
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

export const getProfileUser = (userId) => {
	return (dispatch) => {
		UserApi.getUserProfile(userId)
			.then(response => {
				dispatch(setProfileUser(response))
			})
	}
}

export default profileReducer;