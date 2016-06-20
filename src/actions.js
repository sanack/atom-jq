/** @babel */

import { ACTIONS as ACTION } from './constants'

export const togglePanelView = () => {
  return {
    type: ACTION.TOGGLE_PANEL_VIEW
  }
}

export const jqFilterSuccess = (response) => {
  return {
    type: ACTION.JQ_FILTER_SUCCESS,
    response
  }
}

export const jqFilterRequest = (filter) => {
  return {
    type: ACTION.JQ_FILTER_REQUEST,
    filter
  }
}

export const jqFilterFailure = (error) => {
  return {
    type: ACTION.JQ_FILTER_FAILURE,
    error
  }
}

export const setActivePane = (activePaneItem) => {
  return {
    type: ACTION.SET_ACTIVE_PANE,
    activePaneItem
  }
}
