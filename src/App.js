import './App.css';
import './reset.css'
import Header from './conponents/Header';
import Menu from './conponents/Menu';
import Profile from './conponents/Profile';

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Menu />
			<Profile /> 
		</div>
	);
}

export default App;
