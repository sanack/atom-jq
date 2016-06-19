/** @babel */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { PanelView } from './components/PanelView'

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
  render(
    <PanelView />,
    rootDOMNode
  )
}

export const togglePanel = () => {
  console.log('RenderPanelView')
}
