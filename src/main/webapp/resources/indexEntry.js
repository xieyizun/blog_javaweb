import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './js/components/app'
import Home from './js/containers/home'
import Articles from './js/components/article'
import configureStore from './js/store/configureStore'
import './css/common.css'

const store = configureStore()

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Router path="/" component={App}>
				<IndexRoute component={Home} />
				<Router path="/articles" component={Articles} />
			</Router>
		</Router>
	</Provider>
), document.getElementById('main'));