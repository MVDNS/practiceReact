
import s from './DataInfo.module.css';
import avatar from '../../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../../preloader/Preloader'
import StatusProfileWithHooks from './StatusProfile/StatusProfileWithHooks';

function DataInfo(props) {

	const handleChange = (e) => {
		props.loadPhoto(e.target.files[0])
	}


	if(!props.profile){
		return <Preloader />
	}
	return (
		<div>
			<div className={s.data}>
				<div className={s.avatar}>
					<img  className={s.img}  src={!props.profile.photos.large ? avatar : props.profile.photos.large} alt=""/>
				</div>
				<div className={s.info}>
					<div className={s.name}>{props.profile.fullName}</div>
					<div className={s.aboutMe}>О себе: {props.profile.aboutMe}</div>
					<div className={s.contacts}>Контакты: {props.profile.contacts.vk}</div>
					<StatusProfileWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
					<div className={s.loadForm}>
						<label htmlFor="loadAvatar" className={s.labelForLoad}>Загрузить аватар</label>
						<input id='loadAvatar' type="file" className={s.btnLoad } onChange={(e) => {handleChange(e)}} />
					</div>
				</div>
							
			</div>
		</div>
	)
}

export default DataInfo