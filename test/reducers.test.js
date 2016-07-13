import test from 'tape'
import reducers from './../lib/reducers'
import { ACTIONS as ACTION } from './../lib/constants'

test('openInputBottomView', (assert) => {
  const expectedState = {
    isPanelVisible: true
  }
  const nextState = reducers(
    null, { type: ACTION.OPEN_INPUT_BOTTOM_VIEW }
  )

  assert.deepEqual(
    expectedState,
    nextState,
    'should be opening panel visibile on the global state'
  )
  assert.end()
})

test('closeInputBottomView', (assert) => {
  const expectedState = {
    isPanelVisible: false
  }
  const nextState = reducers(
    null, { type: ACTION.CLOSE_INPUT_BOTTOM_VIEW }
  )

  assert.deepEqual(
    expectedState,
    nextState,
    'should be closing panel visibile on the global state'
  )
  assert.end()
})
