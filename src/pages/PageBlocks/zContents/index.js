import React from 'react'
import HEADER_LINKS from 'constants/headerLinks'
import ListItem from 'components/ListItem'

const headerLinks = () => (
	Object.keys(HEADER_LINKS).map((key) => {
		if (HEADER_LINKS[key].text) {
			return (
				<ListItem>
					<a href={`#${HEADER_LINKS[key].linkName}`}>
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
		<ul>
			{headerLinks()}
		</ul>
	</div>
)

export default Contents
