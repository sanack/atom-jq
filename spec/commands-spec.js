/** @babel */

import {
  PACKAGE_NAME,
  OPEN_COMMAND,
  CLOSE_COMMAND,
  ROOT_DOM_CLASS,
  JQ_PANEL_HIDDEN_CLASS
} from './constants-spec'

import {
  getInputBottomViewDOMNode,
  openJqPanel,
  closeJqPanel
} from './utils-spec'

const expectInputBottomViewToNotBeVisible = (workspaceElement) => {
  const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

  expect(InputBottomViewDOMNode.className).toContain(JQ_PANEL_HIDDEN_CLASS)
  expect(InputBottomViewDOMNode).not.toBeVisible()
}

const expectInputBottomViewToBeVisible = (workspaceElement) => {
  const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

  expect(InputBottomViewDOMNode.className).not.toContain(JQ_PANEL_HIDDEN_CLASS)
  expect(InputBottomViewDOMNode).toBeVisible()
}

describe(PACKAGE_NAME, () => {
  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)

    runs(() => {
      jasmine.attachToDOM(workspaceElement)
      atom.packages.activatePackage(PACKAGE_NAME)
    })
  })

  it('should add InputBottomView into workspace', () => {
    expect(workspaceElement.querySelector(ROOT_DOM_CLASS)).toExist()
  })

  describe(OPEN_COMMAND, () => {
    it('should open the InputBottomView', () => {
      runs(() => {
        openJqPanel(workspaceElement)
        expectInputBottomViewToBeVisible(workspaceElement)
      })
    })
  })

  describe(CLOSE_COMMAND, () => {
    it('should close the InputBottomView', () => {
      runs(() => {
        closeJqPanel(workspaceElement)
        expectInputBottomViewToNotBeVisible(workspaceElement)
      })
    })
  })
})
