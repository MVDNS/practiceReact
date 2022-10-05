import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import asideBarReducer from './asideBarReducer'

let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	asideBar : asideBarReducer,
})

let store = legacy_createStore(reducers);

export default store;