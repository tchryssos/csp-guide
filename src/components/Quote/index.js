import React from 'react'
import PropTypes from 'prop-types'

import './Quote.scss'

const Quote = (props) => {
	const { children } = props
	return (
		<div className="quoteWrapper">
			<div className="quoteVertical" />
			<p>{children}</p>
		</div>
	)
}

Quote.propTypes = {
	children: PropTypes.string.isRequired,
}

export default Quote
