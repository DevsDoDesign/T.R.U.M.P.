import React from 'react'
import './InfoCard.css'

const InfoCard = ({ title, content, onContinue }) => (
	<div className="InfoCard">
		<h1 className="InfoCard__title">{title}</h1>
		<p className="InfoCard__content">{content}</p>
		<button className="InfoCard__button" onClick={onContinue}>Continue</button>
	</div>
)

export default InfoCard