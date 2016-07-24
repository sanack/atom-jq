/** @babel */

import { ACTIONS as ACTION } from './constants'

export const initialState = {
  isPanelVisible: false,
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

    case ACTION.OPEN_INPUT_BOTTOM_VIEW:
      return {
        ...state,
        isPanelVisible: true
      }

    case ACTION.CLOSE_INPUT_BOTTOM_VIEW:
      return {
        ...state,
        isPanelVisible: false
      }

    case ACTION.JQ_FILTER_REQUEST:
      return {
        ...state,
        filter: action.payload.filter
      }

    case ACTION.FOCUS_BOTTOM_INPUT:
      return {
        ...state,
        isBottomPanelFocused: true
      }

    default:
      return state
  }
}

export default reducers
