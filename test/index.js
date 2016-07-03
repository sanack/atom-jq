import expect from 'expect'
import reducers from './../src/reducers'
import { ACTIONS as ACTION } from './../src/constants'

describe('#reducers', () => {
  describe('openPanelView', () => {
    it('should be opening panel visibile on the global state', () => {
      const expectedState = {
        isPanelVisible: true
      }
      const nextState = reducers(null, { type: ACTION.OPEN_PANEL_VIEW })
      expect(expectedState).toEqual(nextState)
    })
  })

  describe('closePanelView', () => {
    it('should be closing panel visibile on the global state', () => {
      const expectedState = {
        isPanelVisible: false
      }
      const nextState = reducers(null, { type: ACTION.CLOSE_PANEL_VIEW })
      expect(expectedState).toEqual(nextState)
    })
  })
})
