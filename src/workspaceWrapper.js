/** @babel */
/* global atom */

export const openResultPane = (resultContent) => {
  const options = {
    activatePane: false,
    split: 'right' // TODO: Use config for set it
  }

  atom.workspace.open('atom-jq-result.json', options).then((editor) => {
    editor.setText(resultContent)
  })
}
