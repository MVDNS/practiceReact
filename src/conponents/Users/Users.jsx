import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/usersAvatar/user_avatar.png'

function Users(props) {
	const axios = require('axios').default;
	if(props.users.length === 0){
		axios.get('https://social-network.samuraijs.com/api/1.0/users', {params: {count: 4}})
		.then( response => {
			console.log(response.data.items)
			props.setUsers(response.data.items)
		} )
	}


  let usersElement = props.users.map((u) => (
    <div className={s.userBlock} key={u.id}>
      <div className={s.info}>
        <div className={s.avatar}>
          <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
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
				(<button className={s.btn} onClick={() => {props.unFollowUser(u.id)}}>Отписаться</button>) : 
				(<button className={s.btn} onClick={() => {props.followUser(u.id)}}>Подписаться</button>)}
      </div>
    </div>
  ));

  return <div className={s.usersContainer}>{usersElement}</div>;
}

export default Users;
