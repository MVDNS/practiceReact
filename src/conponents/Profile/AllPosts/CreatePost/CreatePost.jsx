import React from "react";
import s from "./CreatePost.module.css";

function CreatePost(props) {
  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "SEND-NEW-POST" });
  };

  let updateStatePostText = () => {
    let text = newPost.current.value;
    let action = { type: "STATE-NEW-POST", text: text };
    props.dispatch(action);
  };

  return (
    <div className={s.create}>
      <div className={s.title}>Новое сообщение</div>
      <textarea
        className={s.textarea}
        ref={newPost}
        onChange={updateStatePostText}
        value={props.newPostText}
        placeholder="Ваше сообщение..."
        name="textarea"
        maxLength="400"
        cols="3"
        rows="4"
      ></textarea>
      <button className={s.submit} onClick={addPost}>
        <span className={s.btnText}>Отправить</span>
      </button>
    </div>
  );
}

export default CreatePost;
