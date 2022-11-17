import './App.css';
import './reset.css'
import HeaderContainer from './conponents/Header/HeaderContainer';
import Navbar from './conponents/Navbar/Navbar';
import Login from './conponents/Login/Login';
import ProfileContainer from './conponents/Profile/ProfileContainer';
import DialogsContainer from './conponents/Dialogs/DialogsContainer';
import UsersContainer from './conponents/Users/UsersContainer';
import Friends from './conponents/Friends/Friends';
import Music from './conponents/Music/Music';
import Settings from './conponents/Settings/Settings';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './preloader/Preloader';
import { initializeApp } from './state/appReducer'



class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initApp) {
			return <Preloader />
		}
		return (
			<div className="app-wrapper" >
				<HeaderContainer />
				<Navbar />
				<div className='app-content'>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<ProfileContainer />} />
						<Route path="/profile/:userId" element={<ProfileContainer />} />
						<Route path="/dialogs/*" element={<DialogsContainer />} />
						<Route path="/users/*" element={<UsersContainer />} />
						<Route path="/friends" element={<Friends />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		initApp: state.appInit.initialized
	}
}

export default compose(
	connect(mapStateToProps, { initializeApp }))(App)
