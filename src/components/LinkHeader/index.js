import React from 'react'
import PropTypes from 'prop-types'
import HEADER_LINKS from 'constants/headerLinks'
import LinkIcon from 'components/LinkIcon'

import './LinkHeader.scss'

const LinkHeader = (props) => {
	const { headerKey } = props
	const linkData = HEADER_LINKS[headerKey]

	return (
		<div className="linkHeaderWrapper">
			<LinkIcon headerKey={headerKey} />
			<a name={linkData.linkName}>
				<h1>{linkData.text}</h1>
			</a>
		</div>
	)
}

LinkHeader.propTypes = {
	headerKey: PropTypes.string,
}

export default LinkHeader
