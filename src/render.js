/** @babel */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from './components/App'

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

  render(
    <App />,
    rootDOMNode
  )
}
