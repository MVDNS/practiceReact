
import s from './FavoritFriends.module.css';

function FavoritFriends(props) {

	return (
			<div className={s.friends}>
				<div className={s.title}>Favorit friends</div>
				<div className={s.items}>
					<div className={s.item}>
						<div className={s.avatar}>
							<img src={props.favorits[0].avatar} alt="" />
						</div>
						<div className={s.name}>{props.favorits[0].name}</div>
					</div>
					<div className={s.item}>
						<div className={s.avatar}>
							<img src={props.favorits[1].avatar} alt="" />
						</div>
						<div className={s.name}>{props.favorits[1].name}</div>
					</div>
					<div className={s.item}>
						<div className={s.avatar}>
							<img src={props.favorits[2].avatar} alt="" />
						</div>
						<div className={s.name}>{props.favorits[2].name}</div>
					</div>
				</div>
			</div>
	)
}

export default FavoritFriends