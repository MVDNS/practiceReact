import AllPosts from "./AllPosts/AllPosts";
import DataInfo from "./DataInfo/DataInfo";
import s from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={s.profile}>
      <DataInfo
        imgSrc="https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_17.jpg"
        name="Mvdness"
        birthday="12.12.1990"
        city="Moscow"
      />
      <AllPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;
