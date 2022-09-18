import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css';

const activeLink = ({ isActive }) =>
isActive ? `${s.link} ${s.active}` : `${s.link}`


function Navbar() {
	return (

		<nav className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink to="/profile" className={activeLink}>Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" className={activeLink}>Messages</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/friends" className={activeLink}>Friends</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/Music" className={activeLink}>Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/settings" className={activeLink}>Settings</NavLink>
				</li>
			</ul>
		</nav>

	)
}

export default Navbar