/** @babel */

import {
  ROOT_DOM_CLASS,
  PACKAGE_NAME,
  OPEN_COMMAND,
  CLOSE_COMMAND
} from './constants'

export const getInputBottomViewDOMNode = (workspaceElement) => {
  return workspaceElement.querySelector(ROOT_DOM_CLASS).children[0].children[0]
}

export const openJqPanel = (workspaceElement) => {
  atom.commands.dispatch(workspaceElement, `${PACKAGE_NAME}${OPEN_COMMAND}`)
}

export const closeJqPanel = (workspaceElement) => {
  atom.commands.dispatch(workspaceElement, `${PACKAGE_NAME}${CLOSE_COMMAND}`)
}
