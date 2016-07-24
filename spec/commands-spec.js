/** @babel */

import constants from './constants'
import utils from './utils'

const getInputBottomViewDOMNode = utils.getInputBottomViewDOMNode
const openJqPanel = utils.getInputBottomViewDOMNode
const closeJqPanel = utils.closeJqPanel

const expectInputBottomViewToNotBeVisible = (workspaceElement) => {
  const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

  expect(InputBottomViewDOMNode.className).toContain(constants.JQ_PANEL_HIDDEN_CLASS)
  expect(InputBottomViewDOMNode).not.toBeVisible()
}

const expectInputBottomViewToBeVisible = (workspaceElement) => {
  const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

  expect(InputBottomViewDOMNode.className).not.toContain(constants.JQ_PANEL_HIDDEN_CLASS)
  expect(InputBottomViewDOMNode).toBeVisible()
}

describe(constants.PACKAGE_NAME, () => {
  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)

    runs(() => {
      jasmine.attachToDOM(workspaceElement)
      atom.packages.activatePackage(constants.PACKAGE_NAME)
    })
  })

  it('should add InputBottomView into workspace', () => {
    expect(workspaceElement.querySelector(constants.ROOT_DOM_CLASS)).toExist()
  })

  describe(constants.OPEN_COMMAND, () => {
    it('should open the InputBottomView', () => {
      runs(() => {
        openJqPanel(workspaceElement)
        expectInputBottomViewToBeVisible(workspaceElement)
      })
    })
  })

  describe(constants.CLOSE_COMMAND, () => {
    it('should close the InputBottomView', () => {
      runs(() => {
        closeJqPanel(workspaceElement)
        expectInputBottomViewToNotBeVisible(workspaceElement)
      })
    })
  })
})
