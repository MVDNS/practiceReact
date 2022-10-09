import React from "react";
import s from "./Users.module.css";

function Users(props) {
  let usersElement = props.users.map((u) => (
    <div className={s.userBlock} key={u.id}>
      <div className={s.info}>
        <div className={s.avatar}>
          <img src={u.photoUrl} alt="avatar" />
        </div>
        <div className={s.description}>
          <div className={s.name}>{u.firstName}</div>
          <div className={s.location}>
            {u.location.country}, {u.location.city}
          </div>
          <div className={s.status}>{u.status}</div>
        </div>
      </div>
      <div className={s.btnsBlock}>
				{u.followed ? 
				(<button className={s.btn} onClick={() => {props.unFollowUser(u.id)}}>Отписаться</button>) : 
				(<button className={s.btn} onClick={() => {props.followUser(u.id)}}>Подписаться</button>)}
      </div>
    </div>
  ));

  return <div className={s.usersContainer}>{usersElement}</div>;
}

export default Users;
