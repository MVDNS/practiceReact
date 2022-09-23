
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';



function Dialog(props) {
	const activeLink = ({ isActive }) =>
	isActive ? `${s.btn} ${s.active}` : `${s.btn}`
	
	const path = `/dialogs/${props.id}`
	const avatarLink = props.avatar;

	return (
					<div className={s.dialog}>
						<NavLink to={path} className={activeLink}>
						<img className={s.avatar} src={avatarLink} alt="" />
						<div className={s.name}>{props.name}</div>
						</NavLink>
					</div>
	)
}

export default Dialog