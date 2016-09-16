import React, { Component } from 'react'
import InfoCard from './InfoCard'

const INTRO = 1, GAME = 2, OUTRO = 3

const introOutro = (Comp, { intro, outro }) => class extends Component {
	state = { stage: INTRO }

	render() {
		switch (this.state.stage) {
			case INTRO:
				return <InfoCard title={intro.title} content={intro.content} onContinue={() => this.setState({ stage: GAME })} />
			case GAME:
				return <Comp onFinish={() => this.setState({ stage: OUTRO })} />
			case OUTRO:
				return <InfoCard title={outro.title} content={outro.content} onContinue={this.props.onFinish} />
		}
	}
}

export default introOutro
