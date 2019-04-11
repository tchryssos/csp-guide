import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ChevLeft from 'static/svg/chev-left.svg'
import ChevRight from 'static/svg/chev-right.svg'

const pageType = (nextPageUrl, prevPageUrl) => {
	const pageOptions = {
		svg: ChevLeft,
		alt: 'Return to previous page arrow',
		url: prevPageUrl,
	}

	if (nextPageUrl) {
		pageOptions.svg = ChevRight
		pageOptions.alt = 'Go to next page arrow'
		pageOptions.url = nextPageUrl
	}

	return pageOptions
}

const ChangePage = (props) => {
	const { nextPageUrl, prevPageUrl, title } = props
	const { svg, url, alt } = pageType(nextPageUrl, prevPageUrl)
	return (
		<NavLink to={url} exact className="pageLink">
			<p>
				{title}
			</p>
			<img src={svg} alt={alt} className="pageChangeChev" />
		</NavLink>
	)
}

ChangePage.propTypes = {
	prevPageUrl: PropTypes.string,
	nextPageUrl: PropTypes.string,
	title: PropTypes.string,
}

ChangePage.defaultProps = {
	prevPageUrl: '',
	nextPageUrl: '',
}

export default ChangePage
