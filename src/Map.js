import React, { Component } from 'react'
import './Map.css'

class Map extends Component {
	handleSelect = (type) => () => {
		this.props.changeGame(type)
	}

	render() {
		return (
			<div className="Map">
				<Marker
					top="160px"
					left="190px"
					onSelect={this.handleSelect('wall')}
				/>
				<Marker
					top="250px"
					left="290px"
					onSelect={this.handleSelect('rally')}
				/>
				<Marker
					top="410px"
					left="100px"
					onSelect={this.handleSelect('snapchat')}
				/>
			</div>
		)
	}
}

const Marker = ({ top, left, onSelect }) => (
	<button
		style={{ top, left }}
		className="Map__Marker"
		onClick={onSelect}
	>
		X
	</button>
)

export default Map
