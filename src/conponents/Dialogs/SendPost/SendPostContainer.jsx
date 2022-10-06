import React from "react";
import SendPost from "./SendPost";
import {
  addSendNewMessage,
  updateStateNewMessage,
} from "../../../state/dialogsReducer";

function SendPostContainer(props) {
  let addMessage = () => {
    props.store.dispatch(addSendNewMessage());
  };
  let updateStateMessageText = (text) => {
    props.store.dispatch(updateStateNewMessage(text));
  };

  return (
    <SendPost
      addSendNewMessage={addMessage}
      updateStateNewMessage={updateStateMessageText}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
}

export default SendPostContainer;
