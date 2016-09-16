import React, { Component } from 'react'
import introOutro from './introOutro'
import './Snapchat.css'
import snap1 from './snaps/1.png'
import snapBalls from './snaps/balls.jpg'
import snapMario from './snaps/mario.jpg'
import snapPubHack from './snaps/pubhack.png'
import snapO from './snaps/o.jpg'
import snapP from './snaps/P.jpg'
import snapl from './snaps/l.png'
import twitter from './twitter-logo-from-guidelines.png'
import bg from './sky.jpg'

const SNAPS = [
	{left: 0, delay: '0s', src: snapl},
	{left: 200, delay: '.5s', src: snapO},
	{left: 140, delay: '1s', src: snapP},
	{left: 40, delay: '2s', src: snapP},
	{left: 60, delay: '2.5s', src: snapBalls},
	{left: 200, delay: '3s', src: snapP},
	{left: 0, delay: '3.5s', src: snapMario},
	{left: 100, delay: '5s', src: snapBalls},
	{left: 60, delay: '5.3s', src: snapP},
	{left: 290, delay: '5.4s', src: snapPubHack},
	{left: 80, delay: '5.5s', src: snapO},
	{left: 0, delay: '6s', src: snapBalls},
	{left: 200, delay: '6.5s', src: snapl},
	{left: 140, delay: '7s', src: snapBalls},

	{left: 0, delay: '7.5s', src: snapO},
	{left: 50, delay: '8.1s', src: snapP},
	{left: 100, delay: '9.2s', src: snapPubHack},
	{left: 200, delay: '10s', src: snapPubHack},
	{left: 150, delay: '11.9s', src: snapO},
	{left: 200, delay: '12.6s', src: snapP},
	{left: 250, delay: '13.0s', src: snapBalls},
	{left: 0, delay: '14.8s', src: snapl},
	{left: 50, delay: '15.9s', src: snapPubHack},
	{left: 160, delay: '18s', src: snapl},
]

class Snapchat extends Component {

	state = {
		caught: [],
		throwing: false,
	}

	snapEls = []

	render() {
		requestAnimationFrame(this.checkDone)

		return (
			<div className="Snapchat-bg" style={{ backgroundImage: `url(${bg})` }}>
				{SNAPS.map(({ left, delay, src }, i) => (
					<div
						key={i}
						ref={el => this.snapEls[i] = el}
						className={this.snapClass(i)}
						style={{ left, animationDelay: delay }}
						onClick={() => this.onCatch(i)}
					>
						<img src={src} className="snap-img" />
						<img src={twitter} className="snap-twitter" />
					</div>
				))}
			</div>
		)
	}

	checkDone = () => {
		// re-queue if any not offscreen yet
		for (let img of this.snapEls) {
			if (img.offsetTop < img.parentElement.offsetHeight) {
				return requestAnimationFrame(this.checkDone)
			}
		}

		setTimeout(this.props.onFinish, 1500)
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

export default introOutro(Snapchat, {
	intro: {
		title: `T.R.U.M.P. Hacked!`,
		content: `Some enterprising citizen of our great country has hacked T.R.U.M.P.'s phone! All his Naughty SnapChats™ are falling from the Cloud! Retweet them, before the NSA catches up!`,
	},
	outro: {
		title: `We've Demoralized The T.R.U.M.P. Regime!`,
		content: `Great work, Citizen! Our leader can't hide from the shame you've brought upon him. Soon, our country will be Great Again!™`,
	},
})
