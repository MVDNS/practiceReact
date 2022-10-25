import React from "react";
import Profile from "./Profile";
import { getProfileUser } from '../../state/profileReducer'
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

const useStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
} 

let ProfileContainer = compose(
	connect(useStateToProps, {getProfileUser}),
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
