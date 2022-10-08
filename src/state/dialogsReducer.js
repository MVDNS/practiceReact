const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const STATE_MESSAGE_TEXT = 'STATE-MESSAGE-TEXT';

let initialState = {
	dialogs : [
		{id: 1, name: "Ольга", avatar: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
		{id: 2, name: "Олег", avatar: 'https://klike.net/uploads/posts/2019-03/1551511807_26.png'},
		{id: 3, name: "Дарья", avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511836_43.jpg'},
		{id: 4, name: "Сергей", avatar: 'https://klike.net/uploads/posts/2019-03/1551511862_28.jpg'},
		{id: 5, name: "Дмитрий", avatar: 'https://klike.net/uploads/posts/2019-03/1551511825_37.jpg'},
	],
	
	messages: [
		{id: 1, message: 'Привет!'},
		{id: 2, message: 'Как дела'},
		{id: 3, message: 'Куда пропал?'},
		{id: 4, message: 'Ку!'},
		{id: 5, message: 'Нормально! А твои?'},
	],
	newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
	let stateCopy = {
		...state,
		messages: [...state.messages]
	}
	switch(action.type){
		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: 6, message: state.newMessageText,
			};
		  stateCopy.newMessageText = '';
		  stateCopy.messages.push(newMessage);
			return stateCopy;
		case STATE_MESSAGE_TEXT:
			stateCopy.newMessageText = action.text;
			return stateCopy;
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