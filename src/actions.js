/** @babel */

export const togglePanelView = () => {
  return {
    type: 'TOGGLE_PANEL_VIEW'
  }
}

export const jqFilterSuccess = (response) => {
  return {
    type: 'JQ_FILTER_SUCCESS',
    response
  }
}

export const jqFilterRequest = (filter) => {
  return {
    type: 'JQ_FILTER_REQUEST',
    filter
  }
}

export const jqFilterFailure = (error) => {
  return {
    type: 'JQ_FILTER_FAILURE',
    error
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
