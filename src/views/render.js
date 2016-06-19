/** @babel */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import * as PanelView from './PanelView'

let root = null

export const destroy = () => {
  unmountComponentAtNode(root)
}

export const start = () => {
  root = document.createElement('div')
  document.querySelector('.vertical').appendChild(root)
  root.setAttribute('id', 'atom-jq__root')
  render(
    <PanelView />,
    root
  )
}

export const togglePanel = () => {
  render(
    <PanelView isHidden />,
    root
  )
}
