import './App.css';
import './reset.css'
import Header from './conponents/Header/Header';
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import Dialogs from './conponents/Dialogs/Dialogs';
import Friends from './conponents/Friends/Friends';
import Music from './conponents/Music/Music';
import Settings from './conponents/Settings/Settings';

import { Routes, Route} from 'react-router-dom'

function App(props) {
	console.log(props)
	return (
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.state.asideBar} />
				<div className='app-content'>
					<Routes>
            <Route path="/profile/*" element={<Profile state={props.state.profilePage}/>} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
		        <Route path="/friends" element={<Friends />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
					</Routes>
				</div>	
			</div>

	);
}

export default App;
