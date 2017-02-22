import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './Root'
import makeRoutes from './routes'
import configureStore from './store'

let history
if (!browserHistory) {
  history = createMemoryHistory()
} else {
  history = browserHistory
}

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, history)
history = syncHistoryWithStore(history, store)

render(
  <Root
    store={store}
    routes={makeRoutes({ history })}
  />,
  document.getElementById('root')
)
