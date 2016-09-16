import React, { Component } from 'react'
import button from '../assets/big-red-button.png'
import hand from '../assets/hand.jpg'
import './EndTimes.css'

export default class EndTimes extends Component {
	state = {
		stage: 1
	}

	nextStage = () => this.setState({ stage: ++this.state.stage })

	renderCongrats = () => {
		return (
			<div className="EndTimes">
				<h1>Congratulations!</h1>
				<p>You've demoralised T.R.U.M.P and his minions</p>
				<button onClick={this.nextStage} className="EndTimes__button">Next</button>
			</div>
		)
	}

	renderBigRedButton = () => {
		setTimeout(this.nextStage, 1500)

		return (
			<div className="EndTimes EndTimes--nuke">
				<img src={hand} height="200" className="EndTimes__hand-animation" />
				<img src={button} height="350" className="EndTimes__bigred" />
			</div>
		)
	}

	renderGif = () => {
		return (
			<div className="EndTimes">
				<div className="EndTimes__gif" />
				<button onClick={this.nextStage} className="EndTimes__button">Next</button>
			</div>
		)
	}

	renderGameOver = () => {
		return (
			<div className="EndTimes EndTimes--text-only">
				<h1>Game Over</h1>
				<h1>T.R.U.M.P.</h1>
			</div>
		)
	}

	render() {
		switch (this.state.stage) {
			case 1: return this.renderCongrats()
			case 2: return this.renderBigRedButton()
			case 3: return this.renderGif()
			case 4: return this.renderGameOver()
		}
	}
}
