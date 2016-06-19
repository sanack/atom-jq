/** @babel */

// import { run } from 'node-jq'
import ACTION from './actions'

export const togglePanelView = () => {
  return {
    type: 'TOGGLE_PANEL_VIEW'
  }
}

export const runJqFilter = (filter) => {
  return {
    type: 'RUN_JQ_FILTER',
    filter
  }
}

// const log = (...args) => {
//   console.log(...args)
// }

// export const togglePanel = () => {
//   // const textEditor = atom.workspace.getActiveTextEditor()
//   // textEditor.getText()
//   const activePane = atom.workspace.getActivePaneItem()
//   const activeFile = activePane.buffer.file
//   const activeFilePath = activeFile.path
//   console.log('activeFile', activeFile)
//   console.log('filePath', activeFilePath)
//
//   run('keys', activeFilePath)
//     .then(log)
//     .catch(log)
// }
