import Preloader from '../../../preloader/Preloader';
import s from './DataInfo.module.css';

function DataInfo(props) {
	if(!props.profile){
		return <Preloader />
	}
	return (
		<div className={s.data}>
		<div className={s.avatar}>
			<img  className={s.img}  src={props.profile.photos.large} alt=""/>
		</div>
		<div className={s.info}>
			<div className={s.name}>{props.profile.fullName}</div>
			<div className={s.aboutMe}>О себе: {props.profile.aboutMe}</div>
			<div className={s.contacts}>Контакты: {props.profile.contacts.vk}</div>
		</div>					
	</div>
	)
}

export default DataInfo