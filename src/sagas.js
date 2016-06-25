/** @babel */

import { put, call, select, take, fork } from 'redux-saga/effects'
import { run } from 'node-jq'
import { ACTIONS as ACTION } from './constants'

function * jq () {
  while (true) {
    const { payload: { filter } } = yield take(ACTION.JQ_FILTER_REQUEST)
    const activePaneItem = yield select(state => state.activePaneItem)
    const filePath = activePaneItem.buffer.file.path
    try {
      const result = yield call(run, filter, filePath)
      console.log('result', result)
      yield put({ type: ACTION.OPEN_MODAL_VIEW, payload: { result } })
    } catch (error) {
      yield put({ type: ACTION.JQ_FILTER_FAILURE, payload: { error: error.message } })
    }
  }
}

export default function * sagas () {
  yield [
    fork(jq)
  ]
}
