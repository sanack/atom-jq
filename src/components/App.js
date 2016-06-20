/** @babel */

import React from 'react'
import PanelView from './PanelView'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './../reducers'

const logger = createLogger()
export const store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
)

export const App = () => (
  <Provider store={store}>
    <PanelView />
  </Provider>
)
