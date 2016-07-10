/** @babel */
/* global atom */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { CompositeDisposable } from 'atom'
import { store } from './store'
import { App } from './components/App'
import { openInputBottomView, closeInputBottomView, setActivePane } from './actions'
import { log, clear } from './debug'

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

    this.subscriptions = new CompositeDisposable()

    const { isPanelVisible } = store.getState()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:open': () => {
          store.dispatch(openInputBottomView())
          // store.dispatch(openInputBottomView())
        },
        'atom-jq:close': () => {
          console.log('isPanelVisible', isPanelVisible)
          if (isPanelVisible) {
            store.dispatch(closeInputBottomView())
          }
        },
        'core:close': () => {
          console.log('isPanelVisible', isPanelVisible)
          if (isPanelVisible) {
            store.dispatch(closeInputBottomView())
          }
        },
        'core:cancel': () => {
          console.log('isPanelVisible', isPanelVisible)
          if (isPanelVisible) {
            store.dispatch(closeInputBottomView())
          }
        }
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
    clear()
    unmountComponentAtNode(rootDOMNode)
    document.querySelector(`.${rootDOMId}`).remove()

    atom.workspace.getBottomPanels()
      .filter((panel) => panel.className === rootDOMId)
      .map((panel) => panel.destroy())

    this.subscriptions.dispose()
  }
}
