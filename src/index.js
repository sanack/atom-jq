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
    document.querySelector('.vertical .bottom').appendChild(rootDOMNode)
    rootDOMNode.setAttribute('id', rootDOMId)

    render(
      <App {...store} />,
      rootDOMNode
    )

    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => {
          store.dispatch(togglePanelView())
        }
      })
    )

    this.subscriptions.add(
      atom.workspace.onDidChangeActivePaneItem((paneItem) => {
        store.dispatch(setActivePane(paneItem))
      })
    )

    store.dispatch(
      setActivePane(
        atom.workspace.getActivePaneItem()
      )
    )
  },

  deactivate () {
    console.clear()
    unmountComponentAtNode(rootDOMNode)
    document.querySelector(`#${rootDOMId}`).remove()
    this.subscriptions.dispose()
  }
}
