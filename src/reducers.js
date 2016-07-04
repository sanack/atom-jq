/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'

const initialState = {
  isPanelVisible: false,
  activePaneItem: null
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

    default:
      return state
  }
}

export default reducers
