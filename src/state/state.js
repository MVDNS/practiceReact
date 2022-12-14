import profileReducer from	'./profileReducer';
import dialogsReducer from	'./dialogsReducer';

let store = {

	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'this is first post', likesCount: 1},
				{id: 2, message: 'this is second post', likesCount: 5},
				{id: 3, message: 'this is third post', likesCount: 8},
			],
			newPostText: '',
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
	},
	_rerenderDom() {
		console.log('gogogo')
	},

	getState(){
		return this._state;
	},
	subscribe(observer){
		this._rerenderDom = observer;
	},

	dispatch(action){

		profileReducer(this._state.profilePage, action)
		dialogsReducer(this._state.dialogsPage, action)
		this._rerenderDom();
	}
}


export default store