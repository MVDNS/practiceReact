const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL__COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
	users: [],
	totalCountUsers: 0,
	countUsersPage: 4,
	currentPage: 1,
}

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

export default usersReducer