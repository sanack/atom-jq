/** @babel */

const initialState = {
  isPanelViewHidden: false,
  isModalViewHidden: false
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PANEL_VIEW':
      return {
        ...state,
        isPanelViewHidden: true
      }

    case 'RUN_JQ_FILTER':
      return {
        ...state,
        isPanelViewHidden: true
      }

    default:
      return state
  }
}

export default reducers
