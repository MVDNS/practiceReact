import React from "react";
import SendPost from "./SendPost";
import {
  addSendNewMessage,
  updateStateNewMessage,
} from "../../../state/dialogsReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSendNewMessage: () => {
      dispatch(addSendNewMessage());
    },
    updateStateNewMessage: (text) => {
      dispatch(updateStateNewMessage(text));
    },
  };
};

const SendPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendPost);

export default SendPostContainer;
