
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const activeLink = ({ isActive }) =>
isActive ? `${s.btn} ${s.active}` : `${s.btn}`

function Dialogs() {
	return (
			<div className={s.dialogs}>
				<div className={s.allDialogs}>
					<div className={s.dialog}>
						<NavLink to='/dialogs/1' className={activeLink}>Дарья</NavLink>
					</div>
					<div className={s.dialog}>
					<NavLink to='/dialogs/2' className={activeLink}>Ольга</NavLink>
					</div>
					<div className={s.dialog}>
					<NavLink to='/dialogs/3' className={activeLink}>Сергей</NavLink>
					</div>
					<div className={s.dialog}>
					<NavLink to='/dialogs/4' className={activeLink}>Максим</NavLink>
					</div>
				</div>
				<div className={s.allMessages}>
					<div className={`${s.message} ${s.hisMessage}`}>Привет!</div>
					<div className={`${s.message} ${s.yourMessage}`}>Ку</div>
					<div className={`${s.message} ${s.hisMessage}`}>Как твои дела?</div>
					<div className={`${s.message} ${s.hisMessage}`}>Где пропадал?</div>
				</div>
			</div>
	)
}

export default Dialogs