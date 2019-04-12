import React from 'react'
import PropTypes from 'prop-types'
import HEADER_LINKS from 'constants/headerLinks'
import LinkSvg from 'static/svg/link.svg'

import './LinkHeader.scss'

const LinkHeader = (props) => {
	const { headerKey } = props
	const linkData = HEADER_LINKS[headerKey]

	return (
		<a name={linkData.linkName} >
			<div className="linkHeaderWrapper">
				<img src={LinkSvg} alt="link" className="linkImg" />
				<h1>{linkData.text}</h1>
			</div>
		</a>
	)
}

LinkHeader.propTypes = {
	headerKey: PropTypes.string,
}

export default LinkHeader
