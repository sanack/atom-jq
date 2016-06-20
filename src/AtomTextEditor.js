/** @babel */

import React from 'react'
// import classNames from 'classnames'

const AtomTextEditor = ({ isPanelHidden, dispatch }) => {
  return (
    <atom-text-editor
      class='editor mini'
      tabindex='-1'
      data-grammar='text plain null-grammar'
      mini='' data-encoding='utf8'
    >

    </atom-text-editor>
  )
}

export default AtomTextEditor
