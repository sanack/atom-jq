/** @babel */

const PACKAGE_NAME = 'atom-jq'
const ROOT_DOM_CLASS = '.atom-jq-root'
const JQ_PANEL_HIDDEN_CLASS = 'jq-panel__hidden'

const getInputBottomViewDOMNode = (workspaceElement) => {
  return workspaceElement.querySelector(ROOT_DOM_CLASS).children[0].children[0]
}

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

describe('atom-jq', () => {
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

  describe(':open', () => {
    it('should open the InputBottomView', () => {
      runs(() => {
        atom.commands.dispatch(workspaceElement, 'atom-jq:open')
        expectInputBottomViewToBeVisible(workspaceElement)
      })
    })
  })

  describe(':close', () => {
    it('should close the InputBottomView', () => {
      runs(() => {
        atom.commands.dispatch(workspaceElement, 'atom-jq:close')
        expectInputBottomViewToNotBeVisible(workspaceElement)
      })
    })
  })
})
