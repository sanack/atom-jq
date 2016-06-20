/** @babel */

import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { jqFilterSuccess, jqFilterFailure } from './actions'
import { run } from 'node-jq'
import AtomTextInput from './AtomTextInput'

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

  const panelClasses = classNames(
    'jq-panel',
    {
      'jq-panel__hidden': isPanelHidden
    }
  )

  return (
    <div className={panelClasses}>
      <AtomTextInput
        className='jq-panel-input  input-block-item'
        ref={(node) => { input = node }}
      />
      <button
        className='btn'
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
