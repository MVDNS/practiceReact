
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

let dialogs = [
	{id: 1, name: "Ольга"},
	{id: 2, name: "Олег"},
	{id: 3, name: "Дарья"},
	{id: 4, name: "Сергей"},
	{id: 5, name: "Дмитрий"},
]

let messages = [
	{id: 1, message: 'Привет!'},
	{id: 1, message: 'Как дела'},
	{id: 1, message: 'Куда пропал?'},
	{id: 1, message: 'Ку!'},
	{id: 1, message: 'Нормально! А твои?'},
]


let dialogElement = dialogs.map( d => <div className={s.dialog}><Dialog id={d.id} name={d.name} /></div>)
let messageElement = messages.map( m => <Message message={m.message} />)

function Dialogs() {
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