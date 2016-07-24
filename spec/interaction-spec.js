/** @babel */
/* eslint-disable */

import {
  PACKAGE_NAME,
  ROOT_DOM_CLASS
} from './constants'

import {
  openJqPanel
} from './utils'

import path from 'path'

const JSON_PATH_FIXTURE = path.join(__dirname, 'fixtures', '1.json')

const getJqInput = (workspaceElement) => {
  return workspaceElement.querySelector(`${ROOT_DOM_CLASS} input`)
}

const writeJqQuery = (workspaceElement, queryValue) => {
  const jqInput = getJqInput(workspaceElement)
  jqInput.value = queryValue
}

const pressButtonrunQuery = (workspaceElement) => {
  workspaceElement.querySelector(`${ROOT_DOM_CLASS} button`).click()
}

const runJqQuery = (workspaceElement, queryValue) => {
  writeJqQuery(workspaceElement, queryValue)
  return new Promise((resolve, reject) => {
    resolve(pressButtonrunQuery(workspaceElement))
  })
}

const loadAJsonFile = () => {
  return atom.workspace.open(JSON_PATH_FIXTURE)
}

const expectActivePaneBeAJson = () => {
  expect(atom.workspace.getActivePaneItem()).toExist()
  expect(atom.workspace.getActivePaneItem().getGrammar().name).toBe('JSON')
}

xdescribe('Run a jq query', () => {
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
      // loadAJsonFile()
      //   .then(expectActivePaneBeAJson)
      // openJqPanel(workspaceElement)
      // runJqQuery(workspaceElement, '.')

      waitsForPromise(() => {
        atom.workspace.open(JSON_PATH_FIXTURE)
        expectActivePaneBeAJson()
      })
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
