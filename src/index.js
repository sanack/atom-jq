/** @babel */
/* global atom */

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { CompositeDisposable } from 'atom'
import { store } from './store'
import { App } from './App'
import { togglePanelView, setActivePane } from './actions'

const rootDOMId = 'atom-jq-root'
let rootDOMNode = null

export default {
  activate () {
    console.log('atom-jq activated')
    rootDOMNode = document.createElement('atom-panel')
    document.querySelector('body').appendChild(rootDOMNode)
    rootDOMNode.setAttribute('id', rootDOMId)

    render(<App {...store} />, rootDOMNode)

    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => {
          store.dispatch(togglePanelView())
        }
      })
    )

    this.subscriptions.add(
      atom.workspace.onDidChangeActivePaneItem((item) => {
        store.dispatch(setActivePane(item))
      })
    )
  },

  deactivate () {
    console.clear()
    document.querySelector(`#${rootDOMId}`).remove()
    unmountComponentAtNode(rootDOMNode)
    this.subscriptions.dispose()
  }

}
