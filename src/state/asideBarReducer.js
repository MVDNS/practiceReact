
let initialState = {
	favorits: [
		{id: 1, name: "Ольга", avatar: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
		{id: 2, name: "Олег", avatar: 'https://klike.net/uploads/posts/2019-03/1551511807_26.png'},
		{id: 3, name: "Дарья", avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511836_43.jpg'},
	],
}

const asideBarReducer = (state = initialState, action) => {
	switch(action.type){
		default: 
			return state;
	}
}

export default asideBarReducer