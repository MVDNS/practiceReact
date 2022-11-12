import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import SendPost from "./SendPost/SendPost";

function Dialogs(props) {
  let dialogElement = props.dialogs.map((d) => (
    //<div className={s.dialog} key={d.id}>
    <Dialog id={d.id} name={d.name} avatar={d.avatar} key={d.id} />
    //</div>
  ));
  let messageElement = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.allDialogs}>{dialogElement}</div>
      <div className={s.allMessages}>
        <div className={s.blockMessage}>
          <div className="">{messageElement}</div>
        </div>
        <div className={s.blockSend}>
          <div className={s.send}>
              <SendPost SendNewMessage={props.addSendNewMessage}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
