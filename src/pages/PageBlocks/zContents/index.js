import React from 'react'
import HEADER_LINKS from 'constants/headerLinks'
import ListItem from 'components/ListItem'

import './Contents.scss'

const headerLinks = () => (
	Object.keys(HEADER_LINKS).map((key) => {
		if (HEADER_LINKS[key].text) {
			return (
				<ListItem key={key}>
					<a href={`#${HEADER_LINKS[key].linkName}`} key={key}>
						{HEADER_LINKS[key].text}
					</a>
				</ListItem>
			)
		}
		return null
	})
)

const Contents = () => (
	<div className="contentsWrapper">
		<h3>Contents</h3>
		<ul>
			{headerLinks()}
		</ul>
	</div>
)

export default Contents
