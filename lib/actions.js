/** @babel */

import { ACTIONS as ACTION } from './constants'

export const openPanelView = () => {
  return {
    type: ACTION.OPEN_PANEL_VIEW
  }
}

export const closePanelView = () => {
  return {
    type: ACTION.CLOSE_PANEL_VIEW
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

export const setActivePane = (activePaneItem) => {
  return {
    type: ACTION.SET_ACTIVE_PANE,
    payload: {
      activePaneItem
    }
  }
}
