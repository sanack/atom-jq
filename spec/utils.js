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

const getJqInput = (workspaceElement) => {
  return workspaceElement.querySelector(`${ROOT_DOM_CLASS} input`)
}

export const writeJqQuery = (workspaceElement, queryValue) => {
  const jqInput = getJqInput(workspaceElement)
  jqInput.value = queryValue
}

export const pressButtonrunQuery = (workspaceElement) => {
  workspaceElement.querySelector(`${ROOT_DOM_CLASS} button`).click()
}

export const runJqQuery = (workspaceElement, queryValue) => {
  writeJqQuery(workspaceElement, queryValue)
  return new Promise((resolve, reject) => {
    resolve(pressButtonrunQuery(workspaceElement))
  })
}
