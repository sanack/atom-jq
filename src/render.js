/** @babel */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { PanelView } from './components/PanelView'
import reducers from './reducers'

let rootDOMNode = null
const rootDOMId = 'atom-jq-root'

export const destroy = () => {
  document.querySelector(`#${rootDOMId}`).remove()
  unmountComponentAtNode(rootDOMNode)
}

export const start = () => {
  console.log('Start atom-jq')
  rootDOMNode = document.createElement('div')
  document.querySelector('.vertical').appendChild(rootDOMNode)
  rootDOMNode.setAttribute('id', rootDOMId)

  const store = createStore(reducers)

  render(
    <Provider store={store}>
      <PanelView />
    </Provider>,
    rootDOMNode
  )
}

export const togglePanel = () => {
  console.log('RenderPanelView')
}
