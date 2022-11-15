import { NavLink, Navigate } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/logo/samurai.png'


function Header(props) {
	return (
				<header className={s.header}>
					<NavLink to='/login'><img className={s.img} src={logo} alt='img'/></NavLink>
					<div className={s.companyName}>MVDNSS</div>
					<div className={s.title}>
						<h1 className={s.text}>Profile</h1>
					</div>
					<div className={s.blockLogin}>
						{props.isAuth 
						? <div>{props.login} <button onClick={props.getLogOut}>Выход</button></div> 
						: <NavLink to='/login'>Login</NavLink>}
					</div>
				</header>
	)
}

export default Header