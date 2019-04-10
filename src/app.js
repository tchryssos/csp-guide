import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CSPDescription from 'pages/CSPDescription'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={CSPDescription} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
)
