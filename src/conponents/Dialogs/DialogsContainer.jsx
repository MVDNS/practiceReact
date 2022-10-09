import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addSendNewMessage,
  updateStateNewMessage,
} from "./../../state/dialogsReducer";
import { startTransition } from "react";

const useStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    addSendNewMessage: () => {
      dispatch(addSendNewMessage());
    },
    updateStateNewMessage: (text) => {
      dispatch(updateStateNewMessage(text));
    },
  };
};

const DialogsContainer = connect(useStateToProps, useDispatchToProps)(Dialogs);

export default DialogsContainer;
