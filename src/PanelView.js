/** @babel */

import React from 'react'
// import classNames from 'classnames'
import { connect } from 'react-redux'
import { jqFilterSuccess, jqFilterFailure } from './actions'
import { run } from 'node-jq'

const jq = (filter) => {
  return (dispatch, getState) => {
    const { activePaneItem } = getState()
    return run(filter, activePaneItem.getText(), { input: 'string' }).then(
      output => dispatch(jqFilterSuccess(output)),
      error => dispatch(jqFilterFailure(error))
     )
  }
}

const PanelView = ({ isPanelHidden, dispatch }) => {
  let input

  const runFilter = () => {
    dispatch(jq(input.value))
  }

  const stylesInput = {
    borderRadius: '2px',
    border: 'none',
    margin: '20px',
    lineHeight: '30px',
    color: 'black'
  }

  const stylePanel = {
    display: (!isPanelHidden && 'none')
  }

  return (
    <div style={stylePanel}>
      <input
        type='text'
        style={stylesInput}
        ref={(node) => { input = node }}
      />
      <button
        type='submit'
        onClick={runFilter}
      >
        RUN FILTER
      </button>
    </div>
  )
}

const mapStateToProps = ({ isPanelHidden }) => {
  return {
    isPanelHidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelView)
