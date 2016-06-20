/** @babel */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const logger = createLogger()
export const store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
)
