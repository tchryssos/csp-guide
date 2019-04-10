import React from 'react'
import PropTypes from 'prop-types'

import './ContentBlock.scss'

const ContentBlock = (props) => {
	const { title, children } = props
	return (
		<div className="contentBlockWrapper">
			<h1>{title}</h1>
			{children}
		</div>
	)
}

ContentBlock.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default ContentBlock
