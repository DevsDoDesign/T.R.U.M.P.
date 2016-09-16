import React, { Component } from 'react'
import image1 from '../assets/wall/1.jpg'
import image2 from '../assets/wall/2.jpg'
import rock from '../assets/the-rock.png'
import './WallGame.css'

class WallGame extends Component {
	state = {
		image: 1,
		isAnimating: false
	}

	showNext = () => {
		this.setState({ isAnimating: true })

		setTimeout(() => {
			this.setState({ image: ++this.state.image })

			setTimeout(() => {
				this.setState({ isAnimating: false })
			}, 1000)
		}, 1000)
	}

	render() {
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
				<img src={rock} className={rockClass} />
			</div>
		)
	}
}

export default WallGame
