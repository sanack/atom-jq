/** @babel */

import { put, call, select, take, fork } from 'redux-saga/effects'
import { ACTIONS as ACTION } from './constants'
import { run } from 'node-jq'
import { openResultPane } from './workspaceWrapper'
import { getActivePaneItem } from './reducers'
import { log } from './debug'

export function * requestListener () {
  while (true) {
    const { payload: { filter } } = yield take(ACTION.JQ_FILTER_REQUEST)
    const activePaneItem = yield select(getActivePaneItem)
    try {
      const result = yield call(run, filter, activePaneItem)
      yield put({
        type: ACTION.OPEN_RESULTS_MODAL,
        payload: { result }
      })
    } catch (error) {
      yield put({
        type: ACTION.OPEN_RESULTS_MODAL,
        payload: { result: null },
        error: error.message
      })
    }
  }
}

export function * resultListener () {
  while (true) {
    const { payload: { result }, error } = yield take(ACTION.OPEN_RESULTS_MODAL)
    if (error) {
      log(error)
      atom.notifications.addInfo(error)
    } else {
      log(result)
      openResultPane(result)
    }
  }
}

export function * openModalListener () {
  while (true) {
    yield take(ACTION.OPEN_INPUT_BOTTOM_VIEW)
    yield put({ type: ACTION.FOCUS_BOTTOM_INPUT })
  }
}

export default function * sagas () {
  yield [
    fork(requestListener),
    fork(resultListener),
    fork(openModalListener)
  ]
}
