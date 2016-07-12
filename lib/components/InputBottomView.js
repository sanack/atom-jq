/** @babel */

import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as jqActions from './../actions'

class InputBottomView extends Component {
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

  componentDidUpdate () {
    if (this.props.isBottomPanelFocused) {
      this.input.focus()
    }
  }

  componentDidMount () {
    this.props.actions.focusBottomInput()
  }

  render () {
    const jqPanelClass = classNames(
      'jq-panel',
      {
        'jq-panel__hidden': !this.props.isPanelVisible
      }
    )

    return (
      <div
        tabIndex='-1'
        className={jqPanelClass}
      >
        <input
          tabIndex='-1'
          ref={this.setInputReference.bind(this)}
          className='jq-panel-input  input-block-item  native-key-bindings'
          onKeyPress={this.onKeyPressHandler.bind(this)}
          placeholder='Write here the filter, example: keys'
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

const mapStateToProps = ({ isPanelVisible, isBottomPanelFocused }) => {
  return {
    isPanelVisible,
    isBottomPanelFocused
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
)(InputBottomView)
