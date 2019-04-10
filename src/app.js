import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CSPDescription from 'pages/CSPDescription'
import Form from 'pages/Form'
import DefenseInDepth from 'pages/Interstitial/DefenseInDepth'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={CSPDescription} />
			<Route path="/bad-form" exact component={Form} />
			<Route path="/defense-in-depth" exact component={DefenseInDepth} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
)
