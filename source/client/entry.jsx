import 'babel-polyfill'

import React from 'react'

import {
	render
} from 'react-dom'

import {
  Provider
} from 'react-redux'

import store from './store'

import Application from './components/application.jsx'

render (
  <Provider store={store}>
	 <Application/>
  </Provider>,
	document.getElementById('root')
)
