import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unFollowAC } from "../../state/usersReducer";

const useStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
		}
  };
};

const UsersContainer = connect(useStateToProps, useDispatchToProps)(Users);

export default UsersContainer;
