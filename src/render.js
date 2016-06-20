/** @babel */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import PanelView from './components/PanelView'
import reducers from './reducers'

let rootDOMNode = null
const rootDOMId = 'atom-jq-root'

export const destroy = () => {
  console.clear()
  document.querySelector(`#${rootDOMId}`).remove()
  unmountComponentAtNode(rootDOMNode)
}

export const start = () => {
  rootDOMNode = document.createElement('div')
  document.querySelector('.vertical').appendChild(rootDOMNode)
  rootDOMNode.setAttribute('id', rootDOMId)

  const logger = createLogger()
  const store = createStore(
    reducers,
    applyMiddleware(logger)
  )

  render(
    <Provider store={store}>
      <PanelView />
    </Provider>,
    rootDOMNode
  )

  return store
}
