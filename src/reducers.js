/** @babel */
/* global atom */

const activePane = atom.workspace.getActivePaneItem()
const activeFile = activePane.buffer.file
const activeFilePath = activeFile.path

const initialState = {
  isPanelViewHidden: true,
  isModalViewHidden: false,
  activeFilePath: activeFilePath
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PANEL_VIEW':
      return {
        ...state,
        isPanelViewHidden: !state.isPanelViewHidden
      }

    case 'JQ_FILTER_SUCCESS':
      return {
        ...state,
        filter: action.response
      }

    case 'JQ_FILTER_FAILURE':
      return {
        ...state,
        filter: action.error
      }

    default:
      return state
  }
}

export default reducers
