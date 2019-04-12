import React from 'react'
import PropTypes from 'prop-types'

import LinkHeader from 'components/LinkHeader'

import './ContentBlock.scss'

const ContentBlock = (props) => {
	const { headerKey, children } = props
	return (
		<div className="contentBlockWrapper">
			<LinkHeader headerKey={headerKey} />
			{children}
		</div>
	)
}

ContentBlock.propTypes = {
	headerKey: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default ContentBlock
