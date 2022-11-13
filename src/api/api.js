import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '602bacaa-bd3d-4012-b37f-c0fc1050fdda'
	}
})

export const UserApi = {
	authAxios() {
		return instanse.get(`auth/me`)
			.then(response => {
				return response.data
			})
	},

	getLogin(email, password, rememberMe) {
		return instanse.post(`auth/login?`, { email, password, rememberMe })
			.then(response => {
				return response.data
			})
	},

	getLogOut() {
		return instanse.delete(`auth/login`)
			.then(response => {
				return response.data
			})
	},


	getUnfollow(id) {
		return instanse.delete(`follow/${id}`)
			.then(response => {
				return response.data
			})
	},

	getFollow(id) {
		return instanse.post(`follow/${id}`)
			.then(response => {
				return response.data
			})
	},

	getPage(currentPage = 1, countUsersPage = 4) {
		return instanse.get(`users?page=${currentPage}&count=${countUsersPage}`)
			.then(response => {
				return response.data
			})
	}
}

export const profileAPI = {
	getUserProfile(userId) {
		return instanse.get(`profile/${userId}`)
	},
	getUserStatus(userId) {
		return instanse.get(`/profile/status/${userId}`)
	},
	updateUserStatus(status) {
		return instanse.put(`/profile/status`, { status })
	}
}


