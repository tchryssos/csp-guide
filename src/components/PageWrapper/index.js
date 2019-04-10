import React from 'react'
import PropTypes from 'prop-types'

import './PageWrapper.scss'

const PageWrapper = (props) => {
	const { children } = props
	return (
		<div className="pageWrapper">
			{children}
		</div>
	)
}

PageWrapper.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PageWrapper
