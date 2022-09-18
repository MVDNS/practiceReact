import AllPosts from './AllPosts/AllPosts';
import s from './Profile.module.css';



function Profile() {
	return (
			<div className={s.profile}>
				<div className={s.data}>
					<div className={s.avatar}>
						<img  className={s.img}  src="https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_17.jpg" alt=""/>
					</div>
					<div className={s.info}>
						<div className={s.name}>Mvdness</div>
						<div className={s.birthday}>12.12.1990</div>
						<div className={s.city}>Moscow</div>
					</div>					
				</div>
				<AllPosts />
			</div>
	)
}

export default Profile