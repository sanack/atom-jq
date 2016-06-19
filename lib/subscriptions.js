/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'

export const onActivate = () => {
  this.subscriptions = new CompositeDisposable()

  this.subscriptions.add(
    atom.commands.add('atom-workspace', {
      'atom-jq:toggle': () => this.togglePackage()
    })
  )
}

export const onDeactivate = () => {
  this.subscriptions.dispose()
}
