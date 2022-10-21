import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserDate} from '../../state/authReducer'
import { authAxios } from '../../api/api'
 
class HeaderContainer extends React.Component {

	componentDidMount () {
			authAxios()
			.then( response => {
				console.log(response)
				if(response.resultCode === 0) {
					let {email, id, login} = response.data
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