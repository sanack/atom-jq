/** @babel */

import { start, destroy } from './views/render'
import togglePanel from './actions'
import { onActivate, onDeactivate, onSerialize } from './subscriptions'

export default {
  activate (state) {
    onActivate()
    start()
  },

  togglePackage () {
    togglePanel()
  },

  deactivate () {
    onDeactivate()
    destroy()
  },

  serialize () {
    onSerialize()
  }
}
