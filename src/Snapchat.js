import React, { Component } from 'react'
import InfoCard from './InfoCard'
import './Snapchat.css'
import snap from './snaps/1.png'
import twitter from './twitter-logo-from-guidelines.png'
import bg from './sky.jpg'

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
		// stage: 1,
		caught: [],
		throwing: false,
	}

	snapEls = []

	render() {
		switch (this.state.stage) {
			case 0: return this.renderIntro()
			case 1: return this.renderGame()
			case 2: return this.renderOutro()
		}
	}

	renderIntro() {
		return (
			<InfoCard
				title="T.R.U.M.P. Hacked!"
			  content="Some enterprising citizen of our great country has hacked T.R.U.M.P.'s phone! All his Naughty SnapChats™ are falling from the Cloud! Retweet them, before the NSA catches up!"
			  onContinue={() => this.setState({ stage: 1 })}
			/>
		)
	}

	checkDone = () => {
		// re-queue if any not offscreen yet
		for (let img of this.snapEls) {
			if (img.offsetTop < img.parentElement.offsetHeight) {
				return requestAnimationFrame(this.checkDone)
			}
		}

		setTimeout(() => this.setState({ stage: 2 }), 1500)
	}

	renderGame() {
		requestAnimationFrame(this.checkDone)

		return (
			<div className="Snapchat-bg" style={{ backgroundImage: `url(${bg})` }}>
				{SNAPS.map(({ left, delay }, i) => (
					<div
						key={i}
						ref={el => this.snapEls[i] = el}
						className={this.snapClass(i)}
						style={{ left, animationDelay: delay }}
						onClick={() => this.onCatch(i)}
					>
						<img src={snap} className="snap-img" />
						<img src={twitter} className="snap-twitter" />
					</div>
				))}
			</div>
		)
	}

	renderOutro() {
		return (
			<InfoCard
				title="We've Demoralized The T.R.U.M.P. Regime!"
				content="Great work, Citizen! Our leader can't hide from the shame you've brought upon him. Soon, our country will be Great Again!™"
				onContinue={this.props.onFinish}
			/>
		)
	}

	snapClass = i => {
		return 'snap ' + (this.state.caught.includes(i) ? 'snap-caught' : '')
	}

	onCatch = i => {
		const img = this.snapEls[i]

		this.setState({
			caught: [...this.state.caught, i],
			throwing: { top: img.offsetTop, left: img.offsetLeft },
		})

		setTimeout(() => this.setState({ throwing: false }), 800)
	}

}

export default Snapchat
