import React, { Component } from 'react'

class Snapchat extends Component {

	render() {
		return (
			<div>
				<p>naughty!</p>
				<button onClick={this.props.onFinish}>Finish</button>
			</div>
		)
	}

}

export default Snapchat
