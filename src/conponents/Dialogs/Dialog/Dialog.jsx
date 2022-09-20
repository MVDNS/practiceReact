
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';



function Dialog(props) {

	const activeLink = ({ isActive }) =>
	isActive ? `${s.btn} ${s.active}` : `${s.btn}`
	
	const path = `/dialogs/${props.id}`

	return (
					<div className={s.dialog}>
						<NavLink to={path} className={activeLink}>{props.name}</NavLink>
					</div>
	)
}

export default Dialog