import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addSendNewMessage,
} from "./../../state/dialogsReducer";
import { compose } from "redux";

const useStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
		isAuth: state.auth.isAuth
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    addSendNewMessage: (messageText) => {
      dispatch(addSendNewMessage(messageText));
    },
  };
};

const DialogsContainer = compose(
	connect(useStateToProps, useDispatchToProps)
)(Dialogs)

export default DialogsContainer;
