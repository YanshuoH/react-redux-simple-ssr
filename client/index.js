import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Root from './Root'
import makeRoutes from './routes'
import configureStore from './store'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '',
})
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store);

render(<Root store={store} history={history} routes={makeRoutes()} />, document.getElementById('root'))
