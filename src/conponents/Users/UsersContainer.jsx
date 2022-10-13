import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unFollowAC, toggleIsFetchAC } from "../../state/usersReducer";


const UsersAPIContainer = (props) => {
	const axios = require('axios').default;
	if(props.users.length === 0){
		props.toggleIsFecth(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.countUsersPage}`)
		.then( response => {
			console.log(response)
			props.toggleIsFecth(false)
			props.setUsers(response.data.items)
			props.setTotalCountUsers(12)
		} )
	}

	const onChengedPage = (page) => {
		props.setCurrentPage(page)
		props.toggleIsFecth(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.countUsersPage}`)
		.then( response => {
			console.log(response)
			props.toggleIsFecth(false)
			props.setUsers(response.data.items)
		} )
	}

	return (
		<>
			<Users onChengedPage={onChengedPage}
			totalCountUsers={props.totalCountUsers}
			countUsersPage={props.countUsersPage}
			currentPage={props.currentPage}
			users={props.users}
			isFetch={props.isFetch}
			followUser={props.followUser}
			unFollowUser={props.unFollowUser}
			/>
		</>
	)

}



const useStateToProps = (state) => {
  return {
    users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		countUsersPage: state.usersPage.countUsersPage,
		currentPage: state.usersPage.currentPage,
		isFetch: state.usersPage.isFetch,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    unFollowUser: (userId) => {
      dispatch(unFollowAC(userId));
    },
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setTotalCountUsers: (totalCount) => {
			dispatch(setTotalCountUsersAC(totalCount))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		toggleIsFecth: (isFetch) => {
			dispatch(toggleIsFetchAC(isFetch))
		}
  };
};

const UsersContainer = connect(useStateToProps, useDispatchToProps)(UsersAPIContainer);

export default UsersContainer;
