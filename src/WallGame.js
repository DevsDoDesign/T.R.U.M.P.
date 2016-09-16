import React, { Component } from 'react'
import InfoCard from './InfoCard'
import image1 from '../assets/wall/1.jpg'
import image2 from '../assets/wall/2.jpg'
import rock from '../assets/the-rock.png'
import './WallGame.css'

const NO_OF_THROWS = 6

class WallGame extends Component {
	state = {
		image: 1,
		isAnimating: false,
		showOutro: false
	}

	showNext = () => {
		if (this.state.image === NO_OF_THROWS) {
			this.setState({ showOutro: true })
		}
		else {
			this.throwRock()
		}
	}

	throwRock () {
		this.setState({ isAnimating: true })

		setTimeout(() => {
			this.setState({ image: ++this.state.image })

			setTimeout(() => {
				this.setState({ isAnimating: false })
			}, 1000)
		}, 800)
	}

	renderGame () {
		const wall1Style = {
			backgroundImage: `url(${image1})`,
			opacity: this.state.image === 1 ? 1 : 0
		}

		const wall2Style = {
			backgroundImage: `url(${image2})`,
			opacity: this.state.image === 2 ? 1 : 0
		}

		let rockClass = 'Wall__Rock '
		if (this.state.isAnimating) rockClass += 'Wall__Rock--animated'

		return (
			<div onClick={this.showNext}>
				<div className="Wall__Wall" style={wall1Style}></div>
				<div className="Wall__Wall" style={wall2Style}></div>
				<img src={rock} className={rockClass}/>
			</div>
		)
	}

	renderOutro() {
		return (
			<InfoCard
				title="You've brought down the wall!"
				content="Well done! You've let thousands of Mexicans into the US!"
				onOk={this.props.onFinish}
			/>
		)
	}

	render() {
		if (this.state.showOutro) {
			return this.renderOutro()
		}
		else {
			return this.renderGame()
		}
	}
}

export default WallGame
