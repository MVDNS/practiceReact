import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addSendNewMessage,
} from "./../../state/dialogsReducer";
import { compose } from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

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
	withAuthRedirect,
	connect(useStateToProps, useDispatchToProps)
)(Dialogs)

export default DialogsContainer;
