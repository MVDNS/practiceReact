import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import SendPost from "./SendPost/SendPost";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  let dialogElement = props.dialogsPage.dialogs.map((d) => (
    <div className={s.dialog}>
      <Dialog id={d.id} name={d.name} avatar={d.avatar} />
    </div>
  ));
  let messageElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>{dialogElement}</div>
      <div className={s.allMessages}>
        <div className={s.blockMessage}>{messageElement}</div>
        <div className={s.blockSend}>
          <SendPost
            newMessageText={props.dialogsPage.newMessageText}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
