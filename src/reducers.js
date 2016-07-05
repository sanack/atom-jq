/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'
import { isAtomInDebugMode } from './debugAtom'

export const initialState = {
  isPanelVisible: isAtomInDebugMode || false,
  isBottomPanelFocused: false,
  activePaneItem: null,
  filter: null
}

export const getActivePaneItem = (state) => {
  return state.activePaneItem.buffer.file.path
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case ACTION.SET_ACTIVE_PANE:
      return {
        ...state,
        activePaneItem: action.payload.activePaneItem
      }

    case ACTION.OPEN_PANEL_VIEW:
      return {
        ...state,
        isPanelVisible: true
      }

    case ACTION.CLOSE_PANEL_VIEW:
      return {
        ...state,
        isPanelVisible: false
      }

    case ACTION.JQ_FILTER_REQUEST:
      return {
        ...state,
        filter: action.payload.filter
      }

    default:
      return state
  }
}

export default reducers
