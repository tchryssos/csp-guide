import React from 'react'
import PropTypes from 'prop-types'

import './Quote.scss'

const Quote = (props) => {
	const { children } = props
	return (
		<div className="quoteWrapper">
			<div className="quoteVertical" />
			<div className="quoteChildWrapper">
				{children}
			</div>
		</div>
	)
}

Quote.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Quote
