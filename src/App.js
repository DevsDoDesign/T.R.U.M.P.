import React, {Component} from 'react'
import './App.css'
import Snapchat from './Snapchat'
import Map from './Map'

class App extends Component {
	state = {
		game: null
	}

	render() {
		if (this.state.game) return this.renderGame()

		return (
			<div className="app">
				<div className="map">
					<Map changeGame={this.changeGame} />
				</div>
				<div className="TRUMP">
					T.R.U.M.P.
				</div>
			</div>
		)
	}

	renderGame() {
		switch (this.state.game) {
			case 'wall': return <FakeGame onFinish={this.finishGame} />
			case 'rally': return <FakeGame onFinish={this.finishGame} />
			case 'snapchat': return <Snapchat onFinish={this.finishGame} />
			default: return <p>missing...</p>
		}
	}

	changeGame = game => this.setState({ game })

	finishGame = () => this.setState({ game: null })
}

const FakeGame = ({ onFinish }) => <p>missing... <button onClick={onFinish}>return</button></p>

export default App
