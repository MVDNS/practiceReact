import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


function Header(props) {
	return (
				<header className={s.header}>
					<img className={s.img} src='https://i.ibb.co/zVjHMcx/Pngtree-blue-samurai-head-esports-logo-4278445.png' alt='img'/>
					<div className={s.companyName}>MVDNSS</div>
					<div className={s.title}>
						<h1 className={s.text}>Profile</h1>
					</div>
					<div className={s.blockLogin}>
						{props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
						
					</div>
				</header>
	)
}

export default Header