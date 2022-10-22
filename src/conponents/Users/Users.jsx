import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/usersAvatar/user_avatar.png'
import Preloader from '../../preloader/Preloader'
import {getFollow, getUnfollow} from '../../api/api'

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
				(<button className={s.btn} disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => {
					props.toggleIsFollow(true, u.id)
					getUnfollow(u.id)
					.then( response => {
						if(response.resultCode === 0){
							props.unFollowUser(u.id)
						}
						props.toggleIsFollow(false, u.id)
					} )
				}}>Отписаться</button>) : 
				(<button className={s.btn} disabled={props.isFollowProcess.some(id => id === u.id)} onClick={() => {
					props.toggleIsFollow(true, u.id)
					getFollow(u.id)
						.then( response => {
							if(response.resultCode === 0){
								props.followUser(u.id)
								}
							props.toggleIsFollow(false, u.id)
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
