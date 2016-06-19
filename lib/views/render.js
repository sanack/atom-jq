/** @babel */
import React from 'react'
import ReactDOM from 'react-dom'
import PanelView from './PanelView'

const render = (target) => {
  ReactDOM.render(
    <PanelView />,
    target
  )
}

var root = null
const rootName = 'pluginName'

export const destroy = () => {
  ReactDOM.unmountComponentAtNode(root)
}

export const start = () => {
  root = document.createElement('div')
  root.setAttribute('id', rootName)
  // mark panel visibility as hidden, triggers immediately
  root.hidden = true
  render(root)
}
export function togglePanel () {
  root.hidden = !root.hidden
}
