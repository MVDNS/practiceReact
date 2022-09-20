import s from './DataInfo.module.css';

function DataInfo(props) {
	const path = props.imgSrc;
	return (
		<div className={s.data}>
		<div className={s.avatar}>
			<img  className={s.img}  src={path} alt=""/>
		</div>
		<div className={s.info}>
			<div className={s.name}>{props.name}</div>
			<div className={s.birthday}>{props.birthday}</div>
			<div className={s.city}>{props.city}</div>
		</div>					
	</div>
	)
}

export default DataInfo