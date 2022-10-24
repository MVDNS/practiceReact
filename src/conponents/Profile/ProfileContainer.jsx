import React from "react";
import Profile from "./Profile";
import { getProfileUser } from '../../state/profileReducer'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export function withRouter(Children){
	return(props)=>{
		 const match  = {params: useParams(``)};
		 return <Children {...props}  match = {match}/>
 }
}

class ProfileAPI extends React.Component {

	componentDidMount (){
		let userId = this.props.match.params.userId;
		if(!userId){
			userId = '26228'
		}
			this.props.getProfileUser(userId)
	}

	render (){
		return (
			<Profile {...this.props}/>
		)
	}
};

const profileAp = withRouter(ProfileAPI)

const useStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth
	}
} 

const ProfileContainer = connect(useStateToProps, {getProfileUser})(profileAp);

export default ProfileContainer;