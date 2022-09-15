import './App.css';
import './reset.css'
import Header from './conponents/Header';
import Navbar from './conponents/Navbar';
import Profile from './conponents/Profile';

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<Profile /> 
		</div>
	);
}

export default App;
