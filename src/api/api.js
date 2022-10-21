import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '602bacaa-bd3d-4012-b37f-c0fc1050fdda'
	}
})

export const authAxios = () => {
	return instanse.get(`auth/me`)
		.then(response => {
			return response.data
		})
}

export const getFollow = (id) => {
	return instanse.post(`follow/${id}`)
		.then(response => {
			return response.data
		})
}

export const getUnfollow = (id) => {
	return instanse.delete(`follow/${id}`)
		.then(response => {
			return response.data
		})
}

export const getPage = (currentPage = 1, countUsersPage = 4) => {
	return instanse.get(`users?page=${currentPage}&count=${countUsersPage}`)
		.then(response => {
			return response.data
		})
}