/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'

const initialState = {
  isPanelHidden: true,
  activePaneItem: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case ACTION.SET_ACTIVE_PANE:
      return {
        ...state,
        activePaneItem: action.payload.activePaneItem
      }

    case ACTION.TOGGLE_PANEL_VIEW:
      return {
        ...state,
        isPanelHidden: !state.isPanelHidden
      }

    default:
      return state
  }
}

export default reducers
