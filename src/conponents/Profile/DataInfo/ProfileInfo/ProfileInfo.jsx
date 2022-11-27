import React from "react"
import s from '../DataInfo.module.css';

const ProfileInfo = ({profile}) => {
	return (
		<div>
			<div>
				<b>Full name:</b> {profile.fullName}
			</div>
			<div>
				<b>About me:</b> {profile.aboutMe}
			</div>
			<div>
				<b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
				{profile.lookingForAJob 
				? <div><b>Looking for a job description:</b> {profile.lookingForAJobDescription}</div>
		 		: ''}
			</div>
			<div className={s.contacts}><b>Contacts:</b>
					<Contacts contacts={profile.contacts}/>
			</div>	
		</div>
	)
}

const Contacts = ({contacts}) => {
	return (
		<div>
			{Object.keys(contacts).map( c => <div key={c} > {c} </div>)}
		</div>
	)
}

export default ProfileInfo