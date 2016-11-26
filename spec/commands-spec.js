/** @babel */

import {
  PACKAGE_NAME,
  OPEN_COMMAND,
  CLOSE_COMMAND,
  ROOT_DOM_CLASS,
  JQ_PANEL_HIDDEN_CLASS
} from './constants'

import {
  getInputBottomViewDOMNode,
  openJqPanel,
  closeJqPanel
} from './utils'

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
        const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

        expect(InputBottomViewDOMNode.className).not.toContain(JQ_PANEL_HIDDEN_CLASS)
        expect(InputBottomViewDOMNode).toBeVisible()
      })
    })
  })

  describe(CLOSE_COMMAND, () => {
    it('should close the InputBottomView', () => {
      runs(() => {
        closeJqPanel(workspaceElement)
        const InputBottomViewDOMNode = getInputBottomViewDOMNode(workspaceElement)

        expect(InputBottomViewDOMNode.className).toContain(JQ_PANEL_HIDDEN_CLASS)
        expect(InputBottomViewDOMNode).not.toBeVisible()
      })
    })
  })
})
