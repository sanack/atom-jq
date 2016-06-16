/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'
import { run } from 'node-jq'
import PanelView from './views/PanelView'

const log = (...args) => {
  console.log(...args)
}

export default {
  activate (state) {
    console.clear()

    this.subscriptions = new CompositeDisposable()

    this.panelView = new PanelView({
      highlight: false
    })
    this.panelView.content()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => this.togglePackage()
      })
    )
  },

  togglePackage () {
    // const textEditor = atom.workspace.getActiveTextEditor()
    // textEditor.getText()

    const activePane = atom.workspace.getActivePaneItem()
    const activeFile = activePane.buffer.file
    const activeFilePath = activeFile.path
    console.log('activeFile', activeFile)
    console.log('filePath', activeFilePath)

    run('keys', activeFilePath)
      .then((a) => {
        log(a)
      })
      .catch(log)
  },

  deactivate () {
    this.subscriptions.dispose()
  }

}
