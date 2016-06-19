/** @babel */

import { run } from 'node-jq'

const log = (...args) => {
  console.log(...args)
}

export const togglePanel = () => {
  // const textEditor = atom.workspace.getActiveTextEditor()
  // textEditor.getText()
  const activePane = atom.workspace.getActivePaneItem()
  const activeFile = activePane.buffer.file
  const activeFilePath = activeFile.path
  console.log('activeFile', activeFile)
  console.log('filePath', activeFilePath)

  run('keys', activeFilePath)
    .then(log)
    .catch(log)
}
