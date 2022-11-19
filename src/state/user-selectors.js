import { createSelector } from 'reselect'

//selector
export const getUsers = (state) => {
	return state.usersPage.users;
}

//reselector использовать когда селектор становится сложным и имеет какие то вычисления, что бы не ререндерить каждый раз
export const getUsersSelector = createSelector(getUsers, users => {
	return users.filter((u) => u)
})

export const getTotalCountUsers = (state) => {
	return state.usersPage.totalCountUsers;
}

export const getCountUsersPage = (state) => {
	return state.usersPage.countUsersPage;
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetch = (state) => {
	return state.usersPage.isFetch;
}

export const getIsFollowProcessing = (state) => {
	return state.usersPage.isFollowProcessing;
}