import Post from "./Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

import s from "./AllPosts.module.css";

function AllPosts(props) {
  let state = props.store.getState().profilePage;
  let postElement = state.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));
  return (
    <div className={s.allPosts}>
      <CreatePostContainer />
      {postElement}
    </div>
  );
}

export default AllPosts;
