import React, { Component } from 'react'
import attendees from './people-resized.png'
import introOutro from '../introOutro'
import rally from './trump-rally.png'
import sad from './sad.png'
import css from './styles.css'
import boo from '../../assets/audio/boo.m4a'
import citationNeeded from '../../assets/audio/citation-needed.m4a'
import liar from '../../assets/audio/liar.m4a'
import wall from '../../assets/audio/wall.mp3'

class Rally extends Component {

	state = {
		stage: 0,
		sad: false,
	}

	render() {
		return (
			<div className="rally-bg" onClick={this.shout} style={{backgroundImage: 'url(' + rally + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
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
		}
	}

	stageOne = () => {
		(new Audio(citationNeeded)).play();
		setTimeout(() => {
			this.setState({ stage: 1 });
		}, 2000)
	}

	stageTwo = () => {
		(new Audio(liar)).play();
		setTimeout(() => {
			this.setState({ stage: 2 });
		}, 1200)
	}

	stageThree = () => {
		(new Audio(boo)).play();
		setTimeout(() => {
			this.setState({
				stage: 3,
				sad: true
			});
			(new Audio(wall)).play();
			setTimeout(() => {
				this.props.onFinish()
			}, 2200)
		}, 6500)
	}

}

export default introOutro(Rally, {
	intro: {
		title: `T.R.U.M.P. Propaganda`,
		content: `This is a regime of lies, hatred and betrayal. Educate the loyal following, this will hurt!`,
	},
	outro: {
		title: `We've emptied out the venue!`,
		content: `Excellent work, Citizen! The citizenry have been convinced. Our country will surely return to greatness soon.`,
	},
})