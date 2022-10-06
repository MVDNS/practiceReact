import React from "react";
import CreatePost from "./CreatePost";

import {
  updateStateNewPost,
  addSendNewPost,
} from "../../../../state/profileReducer";

function CreatePostContainer(props) {
  let addPost = () => {
    props.store.dispatch(addSendNewPost());
  };

  let updateStatePostText = (text) => {
    props.store.dispatch(updateStateNewPost(text));
  };

  return (
    <CreatePost
      addSendNewPost={addPost}
      updateStateNewPost={updateStatePostText}
      newPostText={props.store.getState().profilePage.newPostText}
    />
  );
}

export default CreatePostContainer;
