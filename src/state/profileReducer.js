const SEND_NEW_POST = 'SEND-NEW-POST';
const STATE_NEW_POST = 'STATE-NEW-POST';

const profileReducer = (state, action) => {
	switch(action.type) {
		case SEND_NEW_POST: 
			let newPost = 
			{	
				id: 4, 
				message: state.newPostText, 
				likesCount: 0,
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
			case STATE_NEW_POST: 
				state.newPostText = action.text;
				return state;
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