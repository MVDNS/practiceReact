import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StatusProfileWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.userStatus)

	useEffect( () => {
		console.log(props.userStatus)
		setStatus(props.userStatus)
	}, [props.userStatus] )

	let activateEditStatus = () => {
		setEditMode(true)
	} 

	let deactivateEditStatus = () => {
		setEditMode(false)
		props.updateUserStatus(status);
	}

	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{editMode 
			? <input onBlur={deactivateEditStatus} autoFocus={true} onChange={onStatusChange} value={status}/> 
			: <span onClick={activateEditStatus}>{props.userStatus || 'Нет статуса'}</span>
		}	
		</>
	)
}

export default StatusProfileWithHooks