/** @babel */

import { ACTIONS as ACTION } from './constants'

export const togglePanelView = () => {
  return {
    type: ACTION.TOGGLE_PANEL_VIEW
  }
}

export const openModalView = () => {
  return {
    type: ACTION.OPEN_MODAL_VIEW
  }
}

export const jqFilterSuccess = (response) => {
  return {
    type: ACTION.JQ_FILTER_SUCCESS,
    payload: {
      response
    }
  }
}

export const jqFilterRequest = (filter) => {
  return {
    type: ACTION.JQ_FILTER_REQUEST,
    payload: {
      filter
    }
  }
}

export const jqFilterFailure = (error) => {
  return {
    type: ACTION.JQ_FILTER_FAILURE,
    payload: {
      error
    }
  }
}

export const setActivePane = (activePaneItem) => {
  return {
    type: ACTION.SET_ACTIVE_PANE,
    payload: {
      activePaneItem
    }
  }
}
