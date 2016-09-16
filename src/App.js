import React, {Component} from 'react'
import './App.css'
import Snapchat from './Snapchat'
import Rally from './Rally'
import WallGame from './WallGame'
import Map from './Map'

class App extends Component {
	state = {
		game: 'wall'
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
			case 'rally': return <Rally onFinish={this.finishGame} />
			case 'wall': return <WallGame onFinish={this.finishGame} />
			case 'snapchat': return <Snapchat onFinish={this.finishGame} />
			default: return <p>missing...</p>
		}
	}

	changeGame = game => this.setState({ game })

	finishGame = () => this.setState({ game: null })
}

const FakeGame = ({ onFinish }) => <p>missing... <button onClick={onFinish}>return</button></p>

export default App