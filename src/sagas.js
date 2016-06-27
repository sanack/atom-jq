/** @babel */
/* global atom */

import { put, call, select, take, fork } from 'redux-saga/effects'
import { run } from 'node-jq'
import { ACTIONS as ACTION } from './constants'

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

const openResultPane = (resultContent) => {
  const options = {
    activatePane: false,
    split: 'right'
  }

  atom.workspace.open('atom-jq-result.json', options).then((editor) => {
    editor.setText(resultContent)
  })
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
