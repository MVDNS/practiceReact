
import s from './DataInfo.module.css';
import avatar from '../../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../../preloader/Preloader'
import StatusProfileWithHooks from './StatusProfile/StatusProfileWithHooks';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileInfoForm from './ProfileInfo/ProfileInfoForm'
import { useState } from 'react';

function DataInfo(props) {
	let [editModeProfile, setEditModeProfile] = useState(false)
	const handleChange = (e) => {
		props.loadPhoto(e.target.files[0])
	}


	if(!props.profile){
		return <Preloader />
	}
	return (
		<div>
			<div className={s.data}>
				<div className={s.avatarBlock}>
					<div className={s.avatar}>
						<img  className={s.img}  src={!props.profile.photos.large ? avatar : props.profile.photos.large} alt=""/>
					</div>
					{props.isOwner && 
					<div className={s.profileButtons}>
						<div className={s.loadForm}>
							<label htmlFor="loadAvatar" className={s.labelForLoad}>Загрузить аватар</label>
							<input id='loadAvatar' type="file" className={s.btnLoad } onChange={(e) => {handleChange(e)}} />
						</div>
						<div className={s.changeProfile}>
							<button onClick={() => {setEditModeProfile(true)}}>Изменить профиль</button>
						</div>
					</div>}
				</div>
				<div className={s.info}>
					{/* <div className={s.name}>{props.profile.fullName}</div>
					<div className={s.aboutMe}>О себе: {props.profile.aboutMe}</div>
					<div className={s.contacts}>Контакты: { props.profile.contacts.vk}</div> */}
					<div className={s.statusProfile}>
					<b>Status: </b><StatusProfileWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
					</div>
					{editModeProfile 
					? <ProfileInfoForm profile={props.profile} setEditModeProfile={setEditModeProfile} updateProfileData={props.updateProfileData}/> 
					: <ProfileInfo profile={props.profile} setEditModeProfile={setEditModeProfile} isOwner={props.isOwner}/>}
				</div>
			</div>
		</div>
	)
}

export default DataInfo