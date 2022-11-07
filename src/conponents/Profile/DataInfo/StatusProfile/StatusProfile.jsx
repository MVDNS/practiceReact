import React from "react";

class StatusProfile extends React.Component {
	state = {
		isStatusEdit: false,
		userStatus: this.props.userStatus
	}

	activateEditStatus(){
		//async
		this.setState({
			isStatusEdit: true
		})
	}

	deactivateEditStatus() {
		this.setState({
			isStatusEdit: false
		})
		this.props.updateUserStatus(this.state.userStatus);
	}

	onStatusChange = (e) => {
		this.setState({
			userStatus: e.currentTarget.value
		})
	}

	render() {
		return (
			<>
				{this.state.isStatusEdit 
				? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditStatus.bind(this)} value={this.state.userStatus}/> 
				: <span onClick={(this.activateEditStatus.bind(this))} >{this.props.userStatus || 'Нет статуса'}</span>
			}	
			</>
		)
	}
}

export default StatusProfile