const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
	users: [
		{
			id: 1, followed: true, firstName: 'Aleksei', status: 'pool party', location: { country: 'Russia', city: 'Moscow' },
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38xBev9QciPcAyIca9qr7epCqMDU1cZCRUkOBqYcF7o5MzD0o26J622SLjo_WCPHrY90&usqp=CAU'
		},
		{
			id: 2, followed: false, firstName: 'Anna', status: 'play in game', location: { country: 'Russia', city: 'Kastroma' },
			photoUrl: 'https://i.pinimg.com/736x/6d/54/9e/6d549e372a8b81bb2da23089526c2d7c.jpg'
		},
		{
			id: 3, followed: false, firstName: 'Sergei', status: 'sleep to nigth', location: { country: 'Russia', city: 'Tula' },
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDc_G3QLn2JPn3iEIcM0hUycLehjV_9KJcQ&usqp=CAU'
		},
		{
			id: 4, followed: true, firstName: 'Sveta', status: 'alone', location: { country: 'Russia', city: 'Kursk' },
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZCCiJ-orezIXcZUL349eURii81lwIMS5bPwo0v-LMsZ8GLJnmJZGyA1qpEO8ptKCZ-4&usqp=CAU'
		},
	]

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

export default usersReducer