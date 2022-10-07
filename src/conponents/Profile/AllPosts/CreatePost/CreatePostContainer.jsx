import React from "react";
import CreatePost from "./CreatePost";

import {
  updateStateNewPost,
  addSendNewPost,
} from "../../../../state/profileReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
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

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);

export default CreatePostContainer;
