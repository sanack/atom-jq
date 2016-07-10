/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'
import { openInputBottomView, closeInputBottomView, setActivePane } from './actions'

export default {
  onActivate (store) {
    this.subscriptions = new CompositeDisposable()

    const { isPanelVisible } = store.getState()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:open': () => {
          store.dispatch(openInputBottomView())
        },
        'atom-jq:close': () => {
          if (isPanelVisible) {
            store.dispatch(closeInputBottomView())
          }
        },
        'core:close': () => {
          if (isPanelVisible) {
            store.dispatch(closeInputBottomView())
          }
        },
        'core:cancel': () => {
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

  onDeactivate (store) {
    // store.subscribe(() => null)
    this.subscriptions.dispose()
  }
}
