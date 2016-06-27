/** @babel */

import { put, call, select, take, fork } from 'redux-saga/effects'
import { ACTIONS as ACTION } from './constants'
import { run } from 'node-jq'
import { openResultPane } from './workspaceWrapper'

function * jqRequestListener () {
  while (true) {
    const { payload: { filter } } = yield take(ACTION.JQ_FILTER_REQUEST)
    const activePaneItem = yield select(state => state.activePaneItem)
    const filePath = activePaneItem.buffer.file.path
    try {
      const result = yield call(run, filter, filePath)
      yield put({ type: ACTION.OPEN_MODAL_VIEW, payload: { result } })
    } catch (error) {
      yield put({ type: ACTION.SHOW_ERROR_MESSAGE, payload: { error: error.message } })
    }
  }
}

function * openResultPaneListener () {
  while (true) {
    const { payload: { result } } = yield take(ACTION.OPEN_MODAL_VIEW)
    openResultPane(result)
  }
}

export default function * sagas () {
  yield [
    fork(jqRequestListener),
    fork(openResultPaneListener)
  ]
}
