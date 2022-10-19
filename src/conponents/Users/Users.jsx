import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../preloader/Preloader'
const axios = require('axios').default;

function Users(props) {
	let pageCount = Math.ceil( props.totalCountUsers / props.countUsersPage);

	let pages  = [];
	for(let i = 1; i <= pageCount; i++){
		pages.push(i);
	}

	let pagesButton = pages.map( (p) => {
		return (
			<button key={p} className={props.currentPage === p ? s.activeBtn : ''} onClick={() => {props.onChengedPage(p)}}>{p}</button>
		)
	})



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
				(<button className={s.btn} onClick={() => {
					axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
					{withCredentials: true, headers: {
						"API-KEY" : "602bacaa-bd3d-4012-b37f-c0fc1050fdda"
					}})
					.then( response => {
						if(response.data.resultCode === 0){
							props.unFollowUser(u.id)
						}
					} )
				}}>Отписаться</button>) : 
				(<button className={s.btn} onClick={() => {
					axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
				{}, 
				{withCredentials: true, headers: {
					"API-KEY": "602bacaa-bd3d-4012-b37f-c0fc1050fdda"
				}})
				.then( response => {
					if(response.data.resultCode === 0){
						props.followUser(u.id)
					}
				} )}}>Подписаться</button>)}
      </div>
    </div>
  ));

  return(
		<>
			{props.isFetch ? <Preloader/> : null}
			<div className={s.usersContainer}>
				{pagesButton}
				{usersElement}
			</div>
		</>
		 
	)
}

export default Users;
