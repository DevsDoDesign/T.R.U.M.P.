import React, { Component } from 'react'
import attendees from './people-resized.png'
import rally from './trump-rally.png'
import sad from './sad.png'
import css from './styles.css'

class Rally extends Component {

	state = {
		stage: 0,
		sad: false,
	}

	render() {
		return (
			<div className="rally-bg" onClick={this.shout} style={{backgroundImage: 'url(' + rally + ')'}}>
				{this.state.sad &&  <img src={sad} className="rally__sad"/>}
				<img src={attendees} className={this.state.stage >= 1 ? 'rally__attendees-1 rally__active__right': 'rally__attendees-1'}/>
				<img src={attendees} className={this.state.stage >= 3 ? 'rally__attendees-2 rally__active__left': 'rally__attendees-2'}/>
				<img src={attendees} className={this.state.stage >= 2 ? 'rally__attendees-3 rally__active__right': 'rally__attendees-3'}/>
				<img src={attendees} className={this.state.stage >= 1 ? 'rally__attendees-4 rally__active__left': 'rally__attendees-4'}/>
				<img src={attendees} className={this.state.stage >= 3 ? 'rally__attendees-5 rally__active__right': 'rally__attendees-5'}/>
				<img src={attendees} className={this.state.stage >= 2 ? 'rally__attendees-6 rally__active__left': 'rally__attendees-6'}/>
			</div>
		)
	}

	shout = () => {
		switch (this.state.stage) {
			case 0: return this.stageOne()
			case 1: return this.stageTwo()
			case 2: return this.stageThree()
			default: return this.props.onFinish()
		}
	}

	stageOne = () => {
		(new Audio('http://webhooker.dev/citation-needed.m4a')).play();
		setTimeout(() => {
			this.setState({ stage: 1 });
		}, 2000)
	}

	stageTwo = () => {
		(new Audio('http://webhooker.dev/liar.m4a')).play();
		setTimeout(() => {
			this.setState({ stage: 2 });
		}, 1200)
	}

	stageThree = () => {
		(new Audio('http://webhooker.dev/boo.m4a')).play();
		setTimeout(() => {
			this.setState({
				stage: 3,
				sad: true
			});
		}, 6500)
	}

}

export default Rally