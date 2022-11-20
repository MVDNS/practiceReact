
import s from './DataInfo.module.css';
import avatar from '../../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../../preloader/Preloader'
import StatusProfileWithHooks from './StatusProfile/StatusProfileWithHooks';

function DataInfo(props) {
	if(!props.profile){
		return <Preloader />
	}
	return (
		<div className={s.data}>
		<div className={s.avatar}>
			<img  className={s.img}  src={!props.profile.data.photos.large ? avatar : props.profile.data.photos.large} alt=""/>
		</div>
		<div className={s.info}>
			<div className={s.name}>{props.profile.data.fullName}</div>
			<div className={s.aboutMe}>О себе: {props.profile.data.aboutMe}</div>
			<div className={s.contacts}>Контакты: {props.profile.data.contacts.vk}</div>
			<StatusProfileWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
		</div>					
	</div>
	)
}

export default DataInfo