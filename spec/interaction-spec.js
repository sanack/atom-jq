/** @babel */

import path from 'path'
import { PACKAGE_NAME } from './constants'
import {
  openJqPanel,
  getJqInput,
  writeJqQuery,
  pressButtonrunQuery,
  runJqQuery
} from './utils'

const JSON_PATH_FIXTURE = path.join(__dirname, 'fixtures', '1.json')

const loadAJsonFile = () => {
  return atom.workspace.open(JSON_PATH_FIXTURE)
}

const expectActivePaneBeAJson = () => {
  expect(atom.workspace.getActivePaneItem()).toExist()
  // expect(atom.workspace.getActivePaneItem().getGrammar().name).toBe('JSON')
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
      loadAJsonFile().then(expectActivePaneBeAJson)
      openJqPanel(workspaceElement)

      waitsForPromise(() => {
        runJqQuery(workspaceElement, '.')
        atom.workspace.open(JSON_PATH_FIXTURE)
          .then(expectActivePaneBeAJson)
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
