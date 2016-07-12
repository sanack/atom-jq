/** @babel */

import { ACTIONS as ACTION } from './constants'

export const openInputBottomView = () => {
  return {
    type: ACTION.OPEN_INPUT_BOTTOM_VIEW
  }
}

export const openResultsModal = () => {
  return {
    type: ACTION.OPEN_RESULTS_MODAL
  }
}

export const closeInputBottomView = () => {
  return {
    type: ACTION.CLOSE_INPUT_BOTTOM_VIEW
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
