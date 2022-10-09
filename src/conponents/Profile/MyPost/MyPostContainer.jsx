import React from "react";
import MyPost from "./MyPost";
import {
  addSendNewPost,
  updateStateNewPost,
} from "../../../state/profileReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
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

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
