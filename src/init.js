/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'
import { start, destroy, togglePanel } from './views/render'

export default {
  activate (state) {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => togglePanel()
      })
    )

    start()
  },

  deactivate () {
    destroy()
    this.subscriptions.dispose()
  }

}
