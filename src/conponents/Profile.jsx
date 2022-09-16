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
				<div className={s.create}>
					<div className={s.title}>Новое сообщение</div>
					<textarea className={s.input__message} placeholder='Ваше сообщение...' name="post__message" maxLength='400' cols="3" rows="4"></textarea>
					<div className={s.buttons}>
						<a href="#/" className={s.btn}><span className={s.textBtn}>Отправить</span></a>
					</div>	
				</div>

				<div className={s.post}>
					<div className={s.post__avatar}>
						<img src="https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_17.jpg" alt="" className={s.post__img} />
					</div>
					<div className={s.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate pariatur non ratione amet iusto?</div>
				</div>
				<div className={s.post}>
				<div className={s.post__avatar}>
						<img src="https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_17.jpg" alt="" className={s.post__img} />
					</div>
					<div className={s.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate pariatur non ratione amet iusto?</div>
				</div>
			</div>
	)
}

export default Profile