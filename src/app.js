import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import BadForm from 'pages/BadForm'
import GoodForm from 'pages/GoodForm'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/bad-form" exact component={BadForm} />
			<Route path="/good-form" exact component={GoodForm} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app'),
)
