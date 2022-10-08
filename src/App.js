import './App.css';
import './reset.css'
import Header from './conponents/Header/Header';
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import DialogsContainer from './conponents/Dialogs/DialogsContainer';
import Friends from './conponents/Friends/Friends';
import Music from './conponents/Music/Music';
import Settings from './conponents/Settings/Settings';
import { Routes, Route} from 'react-router-dom'


function App(props) {
	return (
			<div className="app-wrapper">
				<Header />
				<Navbar/>
				<div className='app-content'>
					<Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />}/>
		        <Route path="/friends" element={<Friends />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
					</Routes>
				</div>	
			</div>

	);
}

export default App;
