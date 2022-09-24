import React from 'react';
import s from './CreatePost.module.css';

function CreatePost() {
	let newText = React.createRef();
	let addPost = () => {
		console.log(newText.current.value);
	}
	return (
		<div className={s.create}>
			<div className={s.title}>Новое сообщение</div>
			<textarea className={s.textarea} ref={newText} placeholder='Ваше сообщение...' name="textarea" maxLength='400' cols="3" rows="4"></textarea>
			<button className={s.submit}  onClick={addPost}><span className={s.btnText}>Отправить</span></button>	
		</div>
	)
}

export default CreatePost