import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unFollowAC } from "../../state/usersReducer";

const useStateToProps = (state) => {
  return {
    users: state.usersPage.users,
		totalCountUsers: state.usersPage.totalCountUsers,
		countUsersPage: state.usersPage.countUsersPage,
		currentPage: state.usersPage.currentPage,
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
		}
  };
};

const UsersContainer = connect(useStateToProps, useDispatchToProps)(Users);

export default UsersContainer;
