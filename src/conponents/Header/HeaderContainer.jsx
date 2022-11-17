import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { getLogOut} from '../../state/authReducer'
import { compose } from 'redux';
 
class HeaderContainer extends React.Component {
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

export default compose(
	connect(useStateToProps, {getLogOut})
	)
	(HeaderContainer)