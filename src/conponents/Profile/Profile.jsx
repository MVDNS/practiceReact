import MyPostContainer from "./MyPost/MyPostContainer";
import DataInfo from "./DataInfo/DataInfo";
import s from "./Profile.module.css";

function Profile(props) {
	console.log(props)
  return (
    <div className={s.profile}>
      <DataInfo profile={props.profile}/>
      <MyPostContainer />
    </div>
  );
}

export default Profile;
