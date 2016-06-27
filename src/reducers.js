/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'

const initialState = {
  isPanelHidden: true,
  isModalHidden: false,
  activePaneItem: null,
  result: null,
  error: '',
  filter: ''
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

    case ACTION.JQ_FILTER_SUCCESS:
      return {
        ...state,
        result: action.payload.result
      }

    case ACTION.JQ_FILTER_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default reducers
