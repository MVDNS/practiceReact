import React from "react";
import Profile from "./Profile";
import { setProfileUser } from '../../state/profileReducer'
import { connect } from "react-redux";
const axios = require('axios').default;

class ProfileAPI extends React.Component {

	componentDidMount (){
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then( response => {
				console.log(response)
				this.props.setProfileUser(response.data);
			} )
	}

	render (){
		return (
			<Profile {...this.props}/>
		)
	}
};


const useStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
} 

const ProfileContainer = connect(useStateToProps, {setProfileUser})(ProfileAPI);

export default ProfileContainer;