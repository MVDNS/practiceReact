import s from './Post.module.css';

function Post(props) {

	return (
		<div className={s.post}>
			<div className={s.avatar}>
				<img src="https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_17.jpg" alt="" className={s.post__img} />
			</div>
			<div className={s.message}>{props.message}</div>
			<div className="like">likes:{props.like}</div>
		</div>
	)
}

export default Post