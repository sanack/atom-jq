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
        isPanelViewHidden: !state.isPanelViewHidden
      }

    case 'RUN_JQ_FILTER':
      return {
        ...state,
        filter: action.filter
      }

    default:
      return state
  }
}

export default reducers
