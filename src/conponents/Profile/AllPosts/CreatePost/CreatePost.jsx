import s from './CreatePost.module.css';

function CreatePost() {
	return (
		<div className={s.create}>
			<div className={s.title}>Новое сообщение</div>
			<textarea className={s.textarea} placeholder='Ваше сообщение...' name="textarea" maxLength='400' cols="3" rows="4"></textarea>
			<button className={s.submit}><span className={s.btnText}>Отправить</span></button>	
		</div>
	)
}

export default CreatePost