/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'
import { start, destroy } from './render'
import { togglePanelView } from './actions'

export default {
  activate (state) {
    console.log('atom-jq activated')
    const store = start()

    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => {
          store.dispatch(togglePanelView())
        }
      })
    )
  },

  deactivate () {
    destroy()
    this.subscriptions.dispose()
  }

}
