
import React from 'react';
import s from './SendPost.module.css';

function SendPost(props) {

	let newMessage = React.createRef();

	let addMessage = () => {
		props.sendNewMessage();
	}

	let updateStateMessageText = () => {
		let text = newMessage.current.value;
		props.stateMessageText(text)
	}

	return (
	<div className={s.send}>
		<div className={s.title}>Новое сообщение</div>
		<div className={s.block}>
			<textarea className={s.textarea} ref={newMessage} onChange={updateStateMessageText} value={props.newMessageText} placeholder='Ваше сообщение...' name="textarea" maxLength='400' cols="3" rows="1"></textarea>
			<button className={s.submit} onClick={addMessage} ><span className={s.btnText}>Отправить</span></button>	
		</div>
	</div>
	)
}

export default SendPost