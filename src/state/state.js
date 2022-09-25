import { rerenderDom } from "../render";

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'this is first post', likesCount: 1},
			{id: 2, message: 'this is second post', likesCount: 5},
			{id: 3, message: 'this is third post', likesCount: 8},
		],
		newPostText: 'text',
	},

	dialogsPage: {
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
	},

	asideBar: {
		favorits: [
			{id: 1, name: "Ольга", avatar: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
			{id: 2, name: "Олег", avatar: 'https://klike.net/uploads/posts/2019-03/1551511807_26.png'},
			{id: 3, name: "Дарья", avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511836_43.jpg'},
		],
	},
}

export let sendNewPost = () => {
 let newPost = 
 {id: 4, 
	message: state.profilePage.newPostText, 
	likesCount: 0,
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderDom(state);
}

export let stateNewPost = (text) => {
	state.profilePage.newPostText = text;
	rerenderDom(state)
}


export let sendNewMessage = () => {
	let newMessage = {
		id: 6, message: state.dialogsPage.newMessageText,
	};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderDom(state);
}

export let stateMessageText = (text) => {
	state.dialogsPage.newMessageText = text;
	rerenderDom(state);
}

export default state