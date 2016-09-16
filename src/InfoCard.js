import React from 'react'
import './InfoCard.css'

const InfoCard = ({ title, content, onOk }) => (
	<div className="InfoCard">
		<h1 className="InfoCard__title">{title}</h1>
		<p className="InfoCard__content">{content}</p>
		<button className="InfoCard__button" onClick={onOk}>OK</button>
	</div>
)

export default InfoCard