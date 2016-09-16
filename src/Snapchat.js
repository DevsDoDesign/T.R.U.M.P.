import React, { Component } from 'react'
import './Snapchat.css'
import snap from './snaps/1.png'

const SNAPS = [
	{left: 0, delay: '0s'},
	{left: 200, delay: '.5s'},
	{left: 140, delay: '1s'},
	{left: 40, delay: '2s'},
	{left: 60, delay: '2.5s'},
	{left: 200, delay: '3s'},
	{left: 0, delay: '3.5s'},
	{left: 100, delay: '4.5s'},
]

class Snapchat extends Component {

	state = {
		caught: []
	}

	render() {
		return (
			<div className="Snapchat-bg">
				{SNAPS.map(({ left, delay }, i) => (
					<img
						key={i}
						src={snap}
						onClick={() => this.onCatch(i)}
						className={this.snapClass(i)}
					  style={{
					    left,
					    animationDelay: delay,
					  }}
				  />
				))}
			</div>
		)
	}

	snapClass = i => {
		return 'snap ' + (this.state.caught.includes(i) ? 'snap-caught' : '')
	}

	onCatch = i => {
		this.setState({ caught: [...this.state.caught, i] })
	}

}

export default Snapchat
