import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

const ListItem = (props) => {
	const { title, children } = props
	return (
		<li className="listItem">
			<span className="bold">{title} </span>
			{children}
		</li>
	)
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default ListItem