/** @babel */

import React from 'react'
// import classNames from 'classnames'
import { connect } from 'react-redux'
import { jqFilterSuccess, jqFilterFailure } from '../actions'
import { run } from 'node-jq'

const jq = (filter) => {
  return (dispatch, { jsonPath }) => {
    return run(filter, jsonPath).then(
      output => dispatch(jqFilterSuccess(output)),
      error => dispatch(jqFilterFailure(error))
     )
  }
}

const PanelView = ({ isPanelViewHidden, dispatch }) => {
  let input

  const runFilter = (event) => {
    event.preventDefault()
    if (!input.value) {
      return
    }
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
    display: (!isPanelViewHidden && 'none')
  }

  return (
    <div style={stylePanel} tabindex='-1'>
      <input
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

const mapStateToProps = ({ isPanelViewHidden }) => {
  return {
    isPanelViewHidden
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
