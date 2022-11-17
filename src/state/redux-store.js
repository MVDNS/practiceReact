import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import asideBarReducer from './asideBarReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import appReducer from './appReducer'
import thunk from 'redux-thunk'


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	asideBar: asideBarReducer,
	auth: authReducer,
	appInit: appReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;