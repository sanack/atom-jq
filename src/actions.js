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

export const focusBottomInput = (focus) => {
  return {
    type: ACTION.FOCUS_BOTTOM_INPUT,
    payload: {
      focus
    }
  }
}
