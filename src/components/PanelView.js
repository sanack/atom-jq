/** @babel */

import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { runJqFilter } from '../actions'

let PanelView = ({ isPanelViewHidden, dispatch }) => {
  const classes = classNames(
    'atom-jq-panel-view',
    {
      'atom-jq-hidden': false
    }
  )

  let input

  const runFilter = (event) => {
    event.preventDefault()
    if (!input.value) {
      return
    }
    dispatch(runJqFilter(input.value))
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
      <form onSubmit={runFilter}>
        <input
          style={stylesInput}
          ref={(node) => { input = node }}
        />
        <button type='submit'>
          RUN FILTER
        </button>
      </form>
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

PanelView = connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelView)

export default PanelView
