import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, getUsers} from "../../state/usersReducer";
import { compose } from "redux";

class UsersAPIContainer extends React.Component {

	componentDidMount() {

		if(this.props.users.length === 0){
			this.props.getUsers(this.props.currentPage, this.props.countUsersPage);
		}
	}

	onChengedPage = (page) => {
			this.props.getUsers(page, this.props.countUsersPage);
		}

	render() {
		return (
		<Users onChengedPage={this.onChengedPage}
			totalCountUsers={this.props.totalCountUsers}
			countUsersPage={this.props.countUsersPage}
			currentPage={this.props.currentPage}
			users={this.props.users}
			isFetch={this.props.isFetch}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			toggleIsFollow={this.props.toggleIsFollow}
			isFollowProcess={this.props.isFollowProcess}
			
			/>
		)
	}
};

// const UsersAPIContainer = (props) => {
// 	if(props.users.length === 0){
// 		props.toggleIsFecth(true)
// 		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.countUsersPage}`)
// 		.then( response => {
// 			console.log(response)
// 			props.toggleIsFecth(false)
// 			props.setUsers(response.data.items)
// 			props.setTotalCountUsers(12)
// 		} )
// 	}

	// const onChengedPage = (page) => {
	// 	props.setCurrentPage(page)
	// 	props.toggleIsFecth(true)
	// 	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.countUsersPage}`)
	// 	.then( response => {
	// 		console.log(response)
	// 		props.toggleIsFecth(false)
	// 		props.setUsers(response.data.items)
	// 	} )
	// }

// 	return (
// 		<>
// 			<Users onChengedPage={onChengedPage}
// 			totalCountUsers={props.totalCountUsers}
// 			countUsersPage={props.countUsersPage}
// 			currentPage={props.currentPage}
// 			users={props.users}
// 			isFetch={props.isFetch}
// 			followUser={props.followUser}
// 			unFollowUser={props.unFollowUser}
// 			/>
// 		</>
// 	)

// }



const useStateToProps = (state) => {
  return {
    users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		countUsersPage: state.usersPage.countUsersPage,
		currentPage: state.usersPage.currentPage,
		isFetch: state.usersPage.isFetch,
		isFollowProcess: state.usersPage.isFollowProcessing,
  };
};

// const useDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollowUser: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setTotalCountUsers: (totalCount) => {
// 			dispatch(setTotalCountUsersAC(totalCount))
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setCurrentPageAC(currentPage))
// 		},
// 		toggleIsFecth: (isFetch) => {
// 			dispatch(toggleIsFetchAC(isFetch))
// 		},
// 		toggleIsFollow: (isFollowProcess, userId) => {
// 			dispatch(toggleIsFollowProcess(isFollowProcess, userId))
// 		},
		
//   };
// };

const UsersContainer = compose(
	connect(useStateToProps, {follow, unfollow, getUsers})
)(UsersAPIContainer)

export default UsersContainer;
