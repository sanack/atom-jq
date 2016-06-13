/** @babel */
/* global atom */

import { CompositeDisposable } from 'atom'
import { run } from 'node-jq'
// import BottomPanel from './views/BottomPanel'

const log = (...args) => {
  console.log(...args)
}

export default {

  activate (state) {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-jq:toggle': () => this.togglePackage()
      })
    )
  },

  togglePackage () {
    console.log('ATOM-JQ TOGGLED')
    // const textEditor = atom.workspace.getActiveTextEditor()
    // textEditor.getText()
    const activePane = atom.workspace.getActivePaneItem()
    const activeFile = activePane.buffer.file
    const activeFilePath = activeFile.path
    console.log('activeFile', activeFile)
    console.log('filePath', activeFilePath)

    run('.', activeFilePath)
      .then(log)
      .catch(log)
  },

  deactivate () {
    console.log('ATOM-JQ PLUGIN UN-LOADED')
    this.subscriptions.dispose()
  }

}

const isPathJson = (filepath) => {
  return /\.json$/.test(filepath)
}
