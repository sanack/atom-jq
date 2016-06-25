/** @babel */
/** global atom */

import { ACTIONS as ACTION } from './constants'

const initialState = {
  isPanelHidden: true,
  isModalHidden: false,
  activePaneItem: '',
  reponse: '',
  error: '',
  filter: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

    // TODO: SET_ACTIVE_PANE saves the filePath in state.filePath
    //       or in case that this doesn't have, save the state.content
    //       from the TextEditor
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

    case ACTION.TOGGLE_MODAL_VIEW:
      return {
        ...state,
        isModalHidden: !state.isModalHidden,
        modalData: action.payload.data
      }

    case ACTION.JQ_FILTER_SUCCESS:
      return {
        ...state,
        filter: action.payload.response
      }

    case ACTION.JQ_FILTER_FAILURE:
    console.log('payload', action.payload)
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default reducers
