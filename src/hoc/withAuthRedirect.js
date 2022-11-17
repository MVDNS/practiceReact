import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
	let RedirectComponent = (props) => {
		console.log(props)
		if ((!props.isAuth && !props.match) || (!props.isAuth && !props.match.params.userId)) {
			return <Navigate to='/login' />
		}
		else if (!props.isAuth && props.match.params.userId) {
			return <Component {...props} />
		}
		return <Component {...props} />
	}

	let ConnectwithAuthRedirect = connect(mapStateToProps, {})(RedirectComponent)

	return ConnectwithAuthRedirect
} 