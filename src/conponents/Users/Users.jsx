import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/usersAvatar/user_avatar.png'


function Users(props) {
 
	const axios = require('axios').default;
	if(props.users.length === 0){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.countUsersPage}`)
		.then( response => {
			console.log(response)
			props.setUsers(response.data.items)
			props.setTotalCountUsers(12)
		} )
	}

	const onChengedPage = (page) => {
		props.setCurrentPage(page)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.countUsersPage}`)
		.then( response => {
			console.log(response)
			props.setUsers(response.data.items)
		} )
	}

	let pageCount = Math.ceil( props.totalCountUsers / props.countUsersPage);

	let pages  = [];
	for(let i = 1; i <= pageCount; i++){
		pages.push(i);
	}

	let pagesButton = pages.map( (p) => {
		return (
			<button key={p} className={props.currentPage === p ? s.activeBtn : ''} onClick={() => {onChengedPage(p)}}>{p}</button>
		)
	})



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

  return(
		 <div className={s.usersContainer}>
			{pagesButton}
			{usersElement}
		</div>
	)
}

export default Users;
