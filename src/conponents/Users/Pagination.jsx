import React, { useState } from "react";
import s from "./Users.module.css";

const Pagination = ({totalCountUsers, countUsersPage, currentPage, onChengedPage, portionSize}) => {

	let pageCount = Math.ceil( totalCountUsers / countUsersPage);

	let pages  = [];
	for(let i = 1; i <= pageCount; i++){
		pages.push(i);
	}

	let portionCount = Math.ceil(pageCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let farLeftElemPortion = (portionNumber - 1) * portionSize + 1;
	let farRightElemPortion = portionNumber * portionSize;
	
	const	prevPortion = () => {
		setPortionNumber(portionNumber - 1)
		onChengedPage(farLeftElemPortion-1)
	}
	
	const	nextPortion = () => {
		setPortionNumber(portionNumber + 1)
		onChengedPage(farRightElemPortion+1)
		}
	return (
		<div className={s.paginator}>
			{portionNumber > 1 && <button className={s.btnPaginator} onClick={() => {prevPortion()}}>prev</button>}
			{
				pages
				.filter(p => p >= farLeftElemPortion && p <= farRightElemPortion)
				.map(p => {
					return (
					<button key={p} className={currentPage === p ? s.activeBtn : s.btnPagination} onClick={() => {onChengedPage(p)}}>{p}</button>
					)
				})
			}
			{portionNumber < portionCount && <button className={s.btnPaginator} onClick={() => {nextPortion()}} >next</button>}
		</div>
	)
}

export default Pagination