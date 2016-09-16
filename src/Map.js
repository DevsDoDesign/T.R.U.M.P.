import React, { Component } from 'react'

class Map extends Component {
	render() {
		return (
			<div className="fakeMenu">
				<ul>
					<li><button onClick={() => this.props.changeGame('wall')}>Wall</button></li>
					<li><button onClick={() => this.props.changeGame('rally')}>Rally</button></li>
					<li><button onClick={() => this.props.changeGame('snapchat')}>Snapchat</button></li>
				</ul>
			</div>
		)
	}
}

export default Map
