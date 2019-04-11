import React from 'react'
import PageWrapper from 'components/PageWrapper'
import Blog from 'components/Blog'
import ChangePage from 'components/ChangePage'

const GoodForm = () => (
	<PageWrapper>
		<ChangePage prevPageUrl="/" title="Back" />
		<h1>My Safe Blog</h1>
		<Blog />
	</PageWrapper>
)

export default GoodForm
