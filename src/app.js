import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CSPDescription from 'pages/CSPDescription'
import Form from 'pages/Form'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={CSPDescription} />
			<Route path="/bad-form" exact component={Form} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
)
