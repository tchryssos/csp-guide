import React from 'react'

import CSPDescription from 'pages/PageBlocks/aCSPDescription'
import HowDoesCSPWork from 'pages/PageBlocks/bHowDoesCSPWork'
import Nonces from 'pages/PageBlocks/cNonces'
import Drawbacks from 'pages/PageBlocks/dDrawbacks'
import Contents from 'pages/PageBlocks/zContents'

import PageWrapper from 'components/PageWrapper'

const Home = () => (
	<PageWrapper>
		<Contents />
		<CSPDescription />
		<HowDoesCSPWork />
		<Nonces />
		<Drawbacks />
	</PageWrapper>
)

export default Home
