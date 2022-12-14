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

	getLogin(email, password, rememberMe, captcha) {
		return instanse.post(`auth/login?`, { email, password, rememberMe, captcha })
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
	}
}

export const profileAPI = {
	getUserProfile(userId) {
		return instanse.get(`profile/${userId}`)
	},
	getUserStatus(userId) {
		return instanse.get(`profile/status/${userId}`)
	},
	updateUserStatus(status) {
		return instanse.put(`profile/status`, { status })
	},
	savePhoto(file) {
		const formData = new FormData();
		formData.append('image', file)
		return instanse.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	updateProfile(dataProfile) {
		return instanse.put('profile', dataProfile)
	}
}

export const securityAPI = {
	getCaptcha() {
		return instanse.get('/security/get-captcha-url')
	}
}


