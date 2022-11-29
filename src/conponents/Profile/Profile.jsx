import MyPostContainer from "./MyPost/MyPostContainer";
import DataInfo from "./DataInfo/DataInfo";
import s from "./Profile.module.css";
import { Navigate } from "react-router-dom";

function Profile(props) {
	//if(!props.isAuth) return <Navigate to='/login' />
  return (
    <div className={s.profile}>
			
      <DataInfo loadPhoto={props.loadPhoto} 
			profile={props.profile} 
			userStatus={props.userStatus} 
			updateUserStatus={props.updateUserStatus} 
			isOwner={props.isOwner}
			updateProfileData={props.updateProfileData}/>
      <MyPostContainer />
    </div>
  );
}

export default Profile;
