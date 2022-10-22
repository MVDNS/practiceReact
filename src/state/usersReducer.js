const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL__COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'
const TOGGLE_IS_FOLLOW_PROCESS = 'TOGGLE_IS_FOLLOW_PROCESS'

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
		case TOGGLE_IS_FOLLOW_PROCESS: {
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

export const followAC = (userId) => {
	return {
		type: FOLLOW,
		userId: userId,
	}
}

export const unFollowAC = (userId) => {
	return {
		type: UNFOLLOW,
		userId: userId
	}
}

export const setUsersAC = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
export const setTotalCountUsersAC = (totalCount) => {
	return {
		type: SET_TOTAL_COUNT_USERS,
		totalCount
	}
}
export const setCurrentPageAC = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const toggleIsFetchAC = (isFetch) => {
	return {
		type: TOGGLE_IS_FETCH,
		isFetch
	}
}
export const toggleIsFollowProcess = (isFollowProcess, userId) => {
	return {
		type: TOGGLE_IS_FOLLOW_PROCESS,
		isFollowProcess,
		userId
	}
}


export default usersReducer