import React from 'react'
import PageWrapper from 'components/PageWrapper'
import Form from 'components/Form'
import ChangePage from 'components/ChangePage'

const GoodForm = () => (
	<PageWrapper>
		<ChangePage prevPageUrl="/" title="Back" />
		<h1>My Safe Blog</h1>
		<Form />
	</PageWrapper>
)

export default GoodForm
