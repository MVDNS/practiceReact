import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserDate} from '../../state/authReducer'
const axios = require('axios').default;

class HeaderContainer extends React.Component {

	componentDidMount () {

		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then( response => {
				if(response.data.resultCode === 0) {
					let {email, id, login} = response.data.data
					this.props.setAuthUserDate(email, id, login)
				}
			} )

	}

	render () {
		return  <Header {...this.props} />
	}

}

const useStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}

}

export default connect(useStateToProps, {setAuthUserDate})(HeaderContainer)