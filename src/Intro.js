import React, { Component } from 'react'
import App from './App'
import './Intro.css'

class Intro extends Component {
	state = { done: false }

	render() {
		if (this.state.done) return <App />

		return (
			<div className="Intro">
				<h1 className="Intro__title">T.R.U.M.P.</h1>
				<p className="Intro__content">A visual experience brought to you by <a href="http://devsdodesign.com">#DevsDoDesign</a>, brewed at <a
					href="http://pubhack.co.uk">PubHack 5</a>.</p>
				<div className="Intro__buttons">
					<a href="https://www.youtube.com/watch?v=oujQ43nIm6Y" className="Intro__button">Watch Intro Video</a>
					<button className="Intro__button" onClick={() => this.setState({ done: true })}>View App</button>
				</div>
			</div>
		)
	}
}

export default Intro
