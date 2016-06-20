/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'

const initialState = {
  isPanelHidden: true,
  isModalHidden: false,
  activePaneItem: atom.workspace.getActivePaneItem()
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_ACTIVE_PANE:
      return {
        ...state,
        activePaneItem: action.activePaneItem
      }

    case ACTION.TOGGLE_PANEL_VIEW:
      return {
        ...state,
        isPanelHidden: !state.isPanelHidden
      }

    case ACTION.JQ_FILTER_SUCCESS:
      return {
        ...state,
        filter: action.response
      }

    case ACTION.JQ_FILTER_FAILURE:
      return {
        ...state,
        filter: action.error
      }

    default:
      return state
  }
}

export default reducers
