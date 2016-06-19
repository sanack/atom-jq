/** @babel */

import React from 'react'
import classNames from 'classnames'
import { HotKeys } from 'react-hotkeys'

export const PanelView = ({ isHidden }) => {
  const classes = classNames(
    'atom-jq-panel-view',
    {
      'atom-jq-hidden': isHidden
    }
  )

  const keyHandlers = {
    'enter': () => console.log('ENTERPRESSED')
  }

  return (
    <div className={classes} tabindex='-1'>
      <p>atom-jq is rendered! {isHidden}</p>
      <HotKeys handlers={keyHandlers}>
        <input
          type='text'
          value={isHidden}
          onChange={(event) => {
            console.log('event', event.target.value)
          }}
        />
      </HotKeys>
    </div>
  )
}
