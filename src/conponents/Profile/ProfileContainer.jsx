import React from "react";
import Profile from "./Profile";
import { setProfileUser } from '../../state/profileReducer'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const axios = require('axios').default;

export function withRouter(Children){
	return(props)=>{

		 const match  = {params: useParams('23228')};
		 return <Children {...props}  match = {match}/>
 }
}



class ProfileAPI extends React.Component {

	componentDidMount (){
		let userId = this.props.match.params.userId;
		if(!userId){
			userId = 26228
		}
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then( response => {
				this.props.setProfileUser(response.data);
			} )
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
	}
} 

const ProfileContainer = connect(useStateToProps, {setProfileUser})(profileAp);

export default ProfileContainer;