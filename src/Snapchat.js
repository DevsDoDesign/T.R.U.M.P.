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
		stage: 0,
		caught: [],
	}

	componentWillUnmount() {
		clearTimeout(this.gameEnder)
	}

	render() {
		switch (this.state.stage) {
			case 0: return this.renderIntro()
			case 1: return this.renderGame()
			case 2: return this.renderOutro()
		}
	}

	renderIntro() {
		return (
			<div>
				<button onClick={() => this.setState({ stage: 1 })}>Play!</button>
			</div>
		)
	}

	renderGame() {
		setTimeout(() => {
			this.gameEnder = this.setState({ stage: 2 })
		}, 14000)

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

	renderOutro() {
		return (
			<div>
				<button onClick={this.props.onFinish}>blahahah</button>
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
