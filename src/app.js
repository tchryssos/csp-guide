import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CSPDescription from 'pages/CSPDescription'
import Form from 'pages/Form'
import DefenseInDepth from 'pages/Interstitial/DefenseInDepth'
import HowDoesCSPWork from 'pages/HowDoesCSPWork'
import Nonces from 'pages/Nonces'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={CSPDescription} />
			<Route path="/bad-form" exact component={Form} />
			<Route path="/defense-in-depth" exact component={DefenseInDepth} />
			<Route path="/how-does-csp-work" exact component={HowDoesCSPWork} />
			<Route path="/nonces" exact component={Nonces} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
)
