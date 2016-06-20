/** @babel */

import React from 'react'

const AtomTextInput = (props) => {
  return (
    <atom-text-editor
      class={`${props.className} editor mini`}
      tabindex='-1'
      data-grammar='text plain null-grammar'
      mini='' data-encoding='utf8'
    />
  )
}

export default AtomTextInput
