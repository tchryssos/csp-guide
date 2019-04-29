import React from 'react'
import PropTypes from 'prop-types'
import HEADER_LINKS from 'constants/headerLinks'
import LinkSvg from 'static/svg/link.svg'

import './LinkIcon.scss'

const LinkHeader = (props) => {
	const { headerKey } = props
	const linkData = HEADER_LINKS[headerKey]

	return (
		<a className="linkIconLink" href={`#${linkData.linkName}`}>
			<img src={LinkSvg} alt="link" className="linkImg" />
		</a>
	)
}

LinkHeader.propTypes = {
	headerKey: PropTypes.string,
}

export default LinkHeader
