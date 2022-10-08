import React from "react";
import s from "./SendPost.module.css";

function SendPost(props) {
  console.log(props);
  let newMessage = React.createRef();

  let onAddMessage = () => {
    props.addSendNewMessage();
  };
  let onUpdateText = () => {
    let text = newMessage.current.value;
    props.updateStateNewMessage(text);
  };

  return (
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
  );
}

export default SendPost;
