/** @babel */

export const openResultPane = (resultContent) => {
  const options = {
    activatePane: false,
    split: atom.config.get('atom-jq.splitPaneDirection') || 'right'
  }

  atom.workspace.open('atom-jq-result.json', options)
    .then((editor) => editor.setText(resultContent))
    .catch((err) => atom.notifications.addInfo(err))
}
