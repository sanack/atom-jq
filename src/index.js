/** @babel */
/* global atom */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { CompositeDisposable } from 'atom'
import { store } from './store'
import { App } from './App'
import { openPanelView, closePanelView, setActivePane, focusBottomInput } from './actions'

const rootDOMId = 'atom-jq-root'
let rootDOMNode = null

export default {
  activate () {
    console.log('atom-jq activated')
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

    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:open': () => {
          store.dispatch(openPanelView())
          store.dispatch(focusBottomInput())
        },
        'atom-jq:close': () => store.dispatch(closePanelView()),
        'core:close': () => store.dispatch(closePanelView()),
        'core:cancel': () => store.dispatch(closePanelView())
      })
    )

    this.subscriptions.add(
      atom.workspace.onDidChangeActivePaneItem((paneItem) => {
        store.dispatch(setActivePane(paneItem))
      })
    )

    const activePaneItem = atom.workspace.getActivePaneItem()
    store.dispatch(setActivePane(activePaneItem))
  },

  deactivate () {
    console.clear()
    unmountComponentAtNode(rootDOMNode)
    document.querySelector(`.${rootDOMId}`).remove()

    atom.workspace.getBottomPanels()
      .filter((panel) => panel.className === rootDOMId)
      .map((panel) => panel.destroy())

    this.subscriptions.dispose()
  }
}
