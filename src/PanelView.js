/** @babel */

import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as jqActions from './actions'

class PanelView extends Component {
  runJq () {
    const { value } = this.input
    if (value) {
      this.props.actions.jqFilterRequest(value)
    }
  }

  onKeyPressHandler (event) {
    if (event.key === 'Enter') {
      this.runJq()
    }
  }

  setInputReference (node) {
    this.input = node
  }

  render () {
    const jqPanelClass = classNames(
      'jq-panel',
      {
        'jq-panel__hidden': !this.props.isPanelHidden
      }
    )

    return (
      <div className={jqPanelClass}>
        <input
          tabindex='-1'
          ref={this.setInputReference.bind(this)}
          className='jq-panel-input  input-block-item  native-key-bindings'
          onKeyPress={this.onKeyPressHandler.bind(this)}
          placeholder='Write here the filter'
        />
        <button
          className='btn'
          type='submit'
          onClick={this.runJq.bind(this)}
        >
          RUN FILTER
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ isPanelHidden }) => {
  return {
    isPanelHidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(jqActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelView)
