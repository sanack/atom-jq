/** @babel */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const logger = createLogger()
const saga = createSagaMiddleware()

export const store = createStore(
  reducers,
  applyMiddleware(logger, saga)
)

saga.run(rootSaga)
