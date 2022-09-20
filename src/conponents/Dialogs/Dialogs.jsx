
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

function Dialogs() {
	return (
			<div className={s.dialogs}>
				<div className={s.allDialogs}>
					<div className={s.dialog}>
					<Dialog id='1' name='Дарья' />
					</div>
					<div className={s.dialog}>
					<Dialog id='2' name='Ольга' />
					</div>
					<div className={s.dialog}>
					<Dialog id='3' name='Сергей' />
					</div>
					<div className={s.dialog}>
					<Dialog id='4' name='Андрей' />
					</div>
				</div>
				<div className={s.allMessages}>
					<Message message='Привет!' />
					<Message message='Ку!' />
					<Message message='Как твои дела?' />
					<Message message='Где пропадал?' />
				</div>
			</div>
	)
}

export default Dialogs