import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ChevLeft from 'static/svg/chev-left.svg'

const PrevPage = (props) => {
	const { prevPageUrl } = props
	return (
		<NavLink to={prevPageUrl} exact className="pageForwardLink">
			<img src={ChevLeft} alt="Right arrow" className="pageChangeChev" />
		</NavLink>
	)
}

PrevPage.propTypes = {
	prevPageUrl: PropTypes.string,
}

export default PrevPage
