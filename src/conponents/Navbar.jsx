import s from './Navbar.module.css';

function Navbar() {
	return (

		<nav className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}>
					<a href="#/" className={`${s.link} ${s.active}`}>Profile</a>
				</li>
				<li className={s.item}>
					<a href="#/" className={s.link}>Messages</a>
				</li>
				<li className={s.item}>
					<a href="#/" className={s.link}>Friends</a>
				</li>
				<li className={s.item}>
					<a href="#/" className={s.link}>Music</a>
				</li>
				<li className={s.item}>
					<a href="#/" className={s.link}>Settings</a>
				</li>
			</ul>
		</nav>

	)
}

export default Navbar