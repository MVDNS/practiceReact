import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addSendNewMessage,
  updateStateNewMessage,
} from "./../../state/dialogsReducer";

const useStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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
