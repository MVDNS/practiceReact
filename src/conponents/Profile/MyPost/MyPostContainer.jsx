import React from "react";
import MyPost from "./MyPost";
import {
  addSendNewPost,
  updateStateNewPost,
} from "../../../state/profileReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSendNewPost: () => {
      dispatch(addSendNewPost());
    },
    updateStateNewPost: (text) => {
      dispatch(updateStateNewPost(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
