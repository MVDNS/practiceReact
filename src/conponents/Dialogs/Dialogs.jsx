import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  console.log(props.dialogsPage);
  let dialogElement = props.dialogsPage.dialogs.map((d) => (
    //<div className={s.dialog} key={d.id}>
    <Dialog id={d.id} name={d.name} avatar={d.avatar} key={d.id} />
    //</div>
  ));
  let messageElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessage = React.createRef();

  let onAddMessage = () => {
    props.addSendNewMessage();
  };
  let onUpdateText = () => {
    let text = newMessage.current.value;
    props.updateStateNewMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>{dialogElement}</div>
      <div className={s.allMessages}>
        <div className={s.blockMessage}>
          <div className="a">{messageElement}</div>
        </div>
        <div className={s.blockSend}>
          <div className={s.send}>
            <div className={s.title}>Новое сообщение</div>
            <div className={s.block}>
              <textarea
                className={s.textarea}
                ref={newMessage}
                onChange={onUpdateText}
                value={props.dialogsPage.newMessageText}
                placeholder="Ваше сообщение..."
                name="textarea"
                maxLength="400"
                cols="3"
                rows="1"
              ></textarea>
              <button className={s.submit} onClick={onAddMessage}>
                <span className={s.btnText}>Отправить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
