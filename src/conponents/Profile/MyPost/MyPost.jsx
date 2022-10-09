import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} key={p.id} />
  ));

  let newPost = React.createRef();

  let onAddPost = () => {
    props.addSendNewPost();
  };

  let onUpdateText = () => {
    let text = newPost.current.value;
    props.updateStateNewPost(text);
  };

  return (
    <div className="">
      <div className={s.create}>
        <div className={s.title}>Новое сообщение</div>
        <textarea
          className={s.textarea}
          ref={newPost}
          onChange={onUpdateText}
          value={props.newPostText}
          placeholder="Ваше сообщение..."
          name="textarea"
          maxLength="400"
          cols="3"
          rows="4"
        ></textarea>
        <button className={s.submit} onClick={onAddPost}>
          <span className={s.btnText}>Отправить</span>
        </button>
      </div>
      {postsElement}
    </div>
  );
}

export default MyPost;
