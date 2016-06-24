/** @babel */
/** global atom */

import { delay } from 'redux-saga'
import { put, call, select, take, fork } from 'redux-saga/effects'
import { run } from 'node-jq'
import { ACTIONS as ACTION } from './constants'

const ONE_SEC = 1000

// const jq = (filter) => {
//   return (dispatch, getState) => {
//     const { activePaneItem } = getState()
//     return run(filter, activePaneItem.getText(), { input: 'string' }).then(
//       output => dispatch(jqFilterSuccess(output)),
//       error => dispatch(jqFilterFailure(error))
//      )
//   }
// }

function * jq () {
  while (true) {
    const action = yield take(ACTION.JQ_FILTER_REQUEST)
    const activePaneItem = yield select(state => state.activePaneItem)
    const { payload: { filter } } = action
    const filePath = activePaneItem.buffer.file.path
    try {
      const result = yield run(filter, filePath)
      yield call(ACTION.OPEN_MODAL, result)
    } catch (e) {
      yield call(ACTION.JQ_FILTER_FAILURE)
    }
    yield call(delay, ONE_SEC)
  }
}

export default function * sagas () {
  yield [
    fork(jq)
  ]
}
