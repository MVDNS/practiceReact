const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const STATE_MESSAGE_TEXT = 'STATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
	switch(action.type){
		case SEND_NEW_MESSAGE: 
			let newMessage = {
				id: 6, message: state.newMessageText,
			};
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case STATE_MESSAGE_TEXT:
			state.newMessageText = action.text;
			return state;
		default: 
			return state;
	}
}

export const updateStateNewMessage = (text) => {
	return {
		type: STATE_MESSAGE_TEXT,
		text: text,
	}
}

export const addSendNewMessage = () => {
	return {
		type: SEND_NEW_MESSAGE,
	}
}

export default dialogsReducer