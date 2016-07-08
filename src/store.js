/** @babel */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers, { initialState } from './reducers'
import rootSaga from './sagas'
import { isAtomInDebugMode } from './debug'

const saga = createSagaMiddleware()
let middlewares = [saga]
if (isAtomInDebugMode) {
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

saga.run(rootSaga, initialState)
