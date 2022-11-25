import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../preloader/Preloader'
import Pagination from "./Pagination";

function Users(props) {
  let usersElement = props.users.map((u) => (
    <div className={s.userBlock} key={u.id}>
      <div className={s.info}>
        <div className={s.avatar}>
					<NavLink to={`/profile/${u.id}`}>
          <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
					</NavLink>
        </div>
        <div className={s.description}>
          <div className={s.name}>{u.name}</div>
          <div className={s.location}>
            {'u.location.country'}, {'u.location.city'}
          </div>
          <div className={s.status}>{u.status}</div>
        </div>
      </div>
      <div className={s.btnsBlock}>
				{u.followed ? 
				(<button className={s.btn} disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Отписаться</button>) 
				: (<button className={s.btn} disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Подписаться</button>)}
      </div>
    </div>
  ));

  return(
		<>
			{props.isFetch ? <Preloader/> : null}
			<div className={s.usersContainer}>
				<Pagination totalCountUsers={props.totalCountUsers} countUsersPage={props.countUsersPage} currentPage={props.currentPage} onChengedPage={props.onChengedPage} portionSize={props.portionSize}/>
				{usersElement}
			</div>
		</>
		 
	)
}

export default Users;
