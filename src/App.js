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
import { sendNewMessage, sendNewPost, stateMessageText, stateNewPost } from './state/state';


function App(props) {
	return (
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.state.asideBar} />
				<div className='app-content'>
					<Routes>
            <Route path="/profile/*" element={<Profile
																								profilePage={props.state.profilePage} 
																								sendNewPost={sendNewPost} 
																								stateNewPost={stateNewPost}/>} />
            <Route path="/dialogs/*" element={<Dialogs 
																								dialogsPage={props.state.dialogsPage} 
																								sendNewMessage={sendNewMessage}
																								stateMessageText = {stateMessageText}/>}/>
		        <Route path="/friends" element={<Friends />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
					</Routes>
				</div>	
			</div>

	);
}

export default App;
