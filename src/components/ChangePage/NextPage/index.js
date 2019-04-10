import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ChevRight from 'static/svg/chev-right.svg'

const NextPage = (props) => {
	const { nextPageUrl } = props
	return (
		<NavLink to={nextPageUrl} exact className="pageForwardLink">
			<img src={ChevRight} alt="Right arrow" className="pageForwardChev" />
		</NavLink>
	)
}

NextPage.propTypes = {
	nextPageUrl: PropTypes.string,
}

export default NextPage
