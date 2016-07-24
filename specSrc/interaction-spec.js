/** @babel */

import {
  PACKAGE_NAME
} from './constants'

import {
  openJqPanel
} from './utils'

import path from 'path'

const JSON_PATH_FIXTURE = path.join(__dirname, 'fixtures', '1.json')

const getJqInput = (workspaceElement) => {
  return workspaceElement.querySelector('.atom-jq-root input')
}

const writeJqQuery = (workspaceElement, queryValue) => {
  const jqInput = getJqInput(workspaceElement)
  jqInput.value = queryValue
}

const runQuery = (workspaceElement) => {
  workspaceElement.querySelector('.atom-jq-root button').click()
}

const runJqQuery = (workspaceElement, queryValue) => {
  writeJqQuery(workspaceElement, queryValue)
  return new Promise((resolve, reject) => {
    resolve(runQuery(workspaceElement))
  })
}

const loadAJsonFile = () => {
  atom.workspace.open(JSON_PATH_FIXTURE)
}

describe('Run a jq query', () => {
  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)

    runs(() => {
      jasmine.attachToDOM(workspaceElement)
      atom.packages.activatePackage(PACKAGE_NAME)
    })
  })

  describe('with a valid JSON file', () => {
    it('should open a new tab with the result', () => {
      loadAJsonFile()
      openJqPanel(workspaceElement)
      runJqQuery(workspaceElement, '.')
    })
  })

  describe('with a invalid JSON file', () => {
    it('should open a new error', () => {

    })
  })

  describe('with a invalid query', () => {
    it('should open a new error', () => {

    })
  })
})
