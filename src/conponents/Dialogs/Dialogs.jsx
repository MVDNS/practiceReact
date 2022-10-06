import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import SendPostContainer from "./SendPost/SendPostContainer";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  let state = props.store.getState().dialogsPage;
  let dialogElement = state.dialogs.map((d) => (
    <div className={s.dialog}>
      <Dialog id={d.id} name={d.name} avatar={d.avatar} />
    </div>
  ));
  let messageElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>{dialogElement}</div>
      <div className={s.allMessages}>
        <div className={s.blockMessage}>{messageElement}</div>
        <div className={s.blockSend}>
          <SendPostContainer store={props.store} />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
