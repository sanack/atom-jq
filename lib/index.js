/** @babel */
/* global atom */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { store } from './store'
import { App } from './components/App'
import { log, clear } from './debug'
import subscriptions from './subscriptions'

const rootDOMId = 'atom-jq-root'
let rootDOMNode = null

export default {
  activate () {
    log('atom-jq Activated')
    rootDOMNode = document.createElement('atom-panel')
    atom.workspace.addBottomPanel({
      item: rootDOMNode,
      visible: true,
      className: rootDOMId,
      priority: 10
    })

    render(
      <App {...store} />,
      rootDOMNode
    )

    subscriptions.onActivate(store)
  },

  deactivate () {
    clear()
    unmountComponentAtNode(rootDOMNode)
    document.querySelector(`.${rootDOMId}`).remove()

    atom.workspace.getBottomPanels()
      .filter((panel) => panel.className === rootDOMId)
      .map((panel) => panel.destroy())

    subscriptions.onDeactivate(store)
  }
}
