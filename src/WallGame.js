import React, { Component } from 'react'
import introOutro from './introOutro'
import image1 from '../assets/wall/1.jpg'
import image2 from '../assets/wall/2.jpg'
import rock from '../assets/rock.png'
import theRock from '../assets/the-rock.png'
import './WallGame.css'

const NO_OF_THROWS = 2

class WallGame extends Component {
	state = {
		image: 1,
		isAnimating: false
	}

	throwRock = () => {
		this.setState({ isAnimating: true })

		setTimeout(() => {
			this.setState({ image: ++this.state.image })

			setTimeout(() => {
				if (this.state.image === NO_OF_THROWS + 1) {
					this.props.onFinish()
				}

				this.setState({
					isAnimating: false,
					canYouSmellWhatTheRockIsCooking: this.state.image % NO_OF_THROWS === 0,
				})
			}, 300)
		}, 800)
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
			<div onClick={this.throwRock}>
				<div className="Wall__Wall" style={wall1Style}></div>
				<div className="Wall__Wall" style={wall2Style}></div>
				<img src={this.state.canYouSmellWhatTheRockIsCooking ? theRock : rock} className={rockClass}/>
			</div>
		)
	}
}

export default introOutro(WallGame, {
	intro: {
		title: `T.R.U.M.P's built a wall! And Mexico paid!`,
		content: `Throw rocks at the wall to make the border great again™`
	},
	outro: {
		title: `You've brought down the wall!`,
		content: `Well done! You've let thousands of Mexicans into the US!`
	}
})
