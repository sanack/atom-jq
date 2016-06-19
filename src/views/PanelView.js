/** @babel */

import React, { Component } from 'react-for-atom'
import classNames from 'classnames'

export class PanelView extends Component {
  constructor (props) {
    super(props)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const classes = classNames(
      'atom-jq__panel-view',
      {
        'atom-jq__hidden': this.props.isHidden
      }
    )

    return (
      <div className={classes}>
        <p>atom-jq is rendered! {this.props.isHidden}</p>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}
