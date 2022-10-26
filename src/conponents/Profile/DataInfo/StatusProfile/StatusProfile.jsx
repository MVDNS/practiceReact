import React from "react";

class StatusProfile extends React.Component {

	state = {
		isStatusEdit: false,
		text: this.props.status
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
		console.log(this.state.text)
	}

	changeText(event) {
		this.setState({
			text: event.target.value
		})
		
	}



	render() {
		return (
			<>
				{this.state.isStatusEdit 
				? <input autoFocus={true} onChange={(event => {this.changeText(event)})} onBlur={this.deactivateEditStatus.bind(this)} value={this.state.text}/> 
				: <span onClick={(this.activateEditStatus.bind(this))} >{this.state.text}</span>
			}	
			</>
		)
	}
}

export default StatusProfile