import { UserApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL__COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'
const TOGGLE_IS_FOLLOW = 'TOGGLE_IS_FOLLOW'

let initialState = {
	users: [],
	totalCountUsers: 0,
	countUsersPage: 4,
	currentPage: 1,
	isFetch: false,
	isFollowProcessing: []
}
//
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: true,
						}
					}
					return u;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: false
						}
					}
					return u;
				})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case SET_TOTAL_COUNT_USERS: {
			return {
				...state,
				totalCountUsers: action.totalCount
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case TOGGLE_IS_FETCH: {
			return {
				...state,
				isFetch: action.isFetch
			}
		}
		case TOGGLE_IS_FOLLOW: {
			return {
				...state,
				isFollowProcessing: action.isFollowProcess
					? [...state.isFollowProcessing, action.userId]
					: state.isFollowProcessing.filter(id => id !== action.userId)
			}
		}
		default: {
			return state
		}
	}
}

export const followSuccess = (userId) => {
	return {
		type: FOLLOW,
		userId: userId,
	}
}

export const unfollowSuccess = (userId) => {
	return {
		type: UNFOLLOW,
		userId: userId
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
export const setTotalCountUsers = (totalCount) => {
	return {
		type: SET_TOTAL_COUNT_USERS,
		totalCount
	}
}
export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const toggleIsFetch = (isFetch) => {
	return {
		type: TOGGLE_IS_FETCH,
		isFetch
	}
}
export const toggleIsFollow = (isFollowProcess, userId) => {
	return {
		type: TOGGLE_IS_FOLLOW,
		isFollowProcess,
		userId
	}
}

export const getUsers = (currentPage, countUsersPage) => async (dispatch) => {
	dispatch(setCurrentPage(currentPage))
	dispatch(toggleIsFetch(true))
	let promise = await UserApi.getPage(currentPage, countUsersPage)
	dispatch(toggleIsFetch(false))
	dispatch(setUsers(promise.items))
	dispatch(setTotalCountUsers(12))
}

const followUnfollow = async (dispatch, method, userId, success) => {
	dispatch(toggleIsFollow(true, userId))
	let promise = await method(userId)
	if (promise.resultCode === 0) {
		dispatch(success(userId))
	}
	dispatch(toggleIsFollow(false, userId))
}

export const follow = (userId) => async (dispatch) => {
	let method = UserApi.getFollow
	let success = followSuccess
	followUnfollow(dispatch, method, userId, success)
}

export const unfollow = (userId) => async (dispatch) => {
	let method = UserApi.getUnfollow
	let success = unfollowSuccess
	followUnfollow(dispatch, method, userId, success)
}


export default usersReducer