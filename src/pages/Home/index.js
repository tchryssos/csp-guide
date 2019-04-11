import React from 'react'

import CSPDescription from 'pages/PageBlocks/CSPDescription'
import HowDoesCSPWork from 'pages/PageBlocks/HowDoesCSPWork'
import DefenseInDepth from 'pages/PageBlocks/Interstitial/DefenseInDepth'
import Nonces from 'pages/PageBlocks/Nonces'
import Drawbacks from 'pages/PageBlocks/Drawbacks'

import PageWrapper from 'components/PageWrapper'

const Home = () => (
	<PageWrapper>
		<CSPDescription />
		<HowDoesCSPWork />
		<DefenseInDepth />
		<Nonces />
		{/* <Drawbacks /> */}
	</PageWrapper>
)

export default Home