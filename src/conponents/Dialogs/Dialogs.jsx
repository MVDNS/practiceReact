
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';



function Dialogs(props) {
	let dialogElement = props.dialogs.map( d => <div className={s.dialog}><Dialog id={d.id} name={d.name} /></div>)
	let messageElement = props.messages.map( m => <Message message={m.message} />)

	return (
			<div className={s.dialogs}>
				<div className={s.allDialogs}>
					{ dialogElement }
				</div>
				<div className={s.allMessages}>
					{ messageElement }
				</div>
			</div>
	)
}

export default Dialogs