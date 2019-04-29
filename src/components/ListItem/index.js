import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

const ListItem = (props) => {
	const { title, children, className } = props
	return (
		<li className={`listItem ${className}`}>
			<span className="bold">{title} </span>
			{children}
		</li>
	)
}

ListItem.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default ListItem
