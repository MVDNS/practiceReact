import React from "react";
import Profile from "./Profile";
import { getProfileUser, getUserStatus, updateUserStatus } from '../../state/profileReducer'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

import { compose } from "redux";

export function withRouter(Children){
	return(props)=>{
		 const match  = {params: useParams(``)};
		 return <Children {...props}  match = {match}/>
 }
}

class ProfileAPI extends React.Component {
	componentDidMount (){
		let userId = this.props.match.params.userId;
		if(!userId && this.props.isAuth){
			userId = this.props.autorizedUserId
		}
			this.props.getProfileUser(userId)
			this.props.getUserStatus(userId)
	}
	render (){
		return (
			<Profile {...this.props} userStatus={this.props.userStatus} updateUserStatus={this.props.updateUserStatus}/>
		)
	}
};

const useStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		isAuth: state.auth.isAuth,
		autorizedUserId: state.auth.userId
	}
} 

let ProfileContainer = compose(
	connect(useStateToProps, {getProfileUser, getUserStatus, updateUserStatus}),
	withAuthRedirect,
	withRouter
)(ProfileAPI)

export default ProfileContainer;

// или по дефолту без создания переменной
// export default compose(
// 	connect(useStateToProps, {getProfileUser}),
// 	withAuthRedirect,
// 	withRouter
// )(ProfileAPI)
