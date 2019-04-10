import React from 'react'
import PropTypes from 'prop-types'

import NextPage from 'components/ChangePage/NextPage'
import PrevPage from 'components/ChangePage/PrevPage'

import './ChangePages.scss'

const ChangePages = (props) => {
	const { nextPageUrl, prevPageUrl } = props
	return (
		<div className="changePagesWrapper">
			<PrevPage prevPageUrl={prevPageUrl} />
			<NextPage nextPageUrl={nextPageUrl} />
		</div>
	)
}

ChangePages.propTypes = {
	nextPageUrl: PropTypes.string.isRequired,
	prevPageUrl: PropTypes.string.isRequired,
}

export default ChangePages
