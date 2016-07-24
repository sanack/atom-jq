import constants from './constants'

export const getInputBottomViewDOMNode = (workspaceElement) => {
  return workspaceElement.querySelector(
    constants.ROOT_DOM_CLASS
  ).children[0].children[0]
}

export const openJqPanel = (workspaceElement) => {
  atom.commands.dispatch(
    workspaceElement,
    `${constants.PACKAGE_NAME}${constants.OPEN_COMMAND}`
  )
}

export const closeJqPanel = (workspaceElement) => {
  atom.commands.dispatch(
    workspaceElement,
    `${constants.PACKAGE_NAME}${constants.CLOSE_COMMAND}`
  )
}
