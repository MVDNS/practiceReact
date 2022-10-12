
const SEND_NEW_POST = 'SEND-NEW-POST';
const STATE_NEW_POST = 'STATE-NEW-POST';


let initialState = {
	posts: [
		{ id: 1, message: 'this is first post', likesCount: 1 },
		{ id: 2, message: 'this is second post', likesCount: 5 },
		{ id: 3, message: 'this is third post', likesCount: 8 },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
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

export const updateStateNewPost = (text) => {
	return {
		type: STATE_NEW_POST,
		text: text,
	}
}

export const addSendNewPost = () => {
	return {
		type: SEND_NEW_POST,
	}
}

export default profileReducer;