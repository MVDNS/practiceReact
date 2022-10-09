import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import asideBarReducer from './asideBarReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	usersPage: usersReducer,
	asideBar : asideBarReducer,
})

let store = legacy_createStore(reducers);
window.store = store;
export default store;