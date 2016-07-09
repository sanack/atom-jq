// import test from 'tape'
// import { put, select, call } from 'redux-saga/effects'
// import { ACTIONS as ACTION } from './../src/constants'
// import { jqRequestListener } from './../src/sagas'
// import { getActivePaneItem, getFilter } from './../src/reducers'
// import { run } from 'node-jq'
// // import path from 'path'
//
// const initialState = {
//   isPanelVisible: false,
//   isBottomPanelFocused: false,
//   activePaneItem: null,
//   filter: null
// }
//
// const assertSagaIsDone = (generator, assert) => {
//   assert.deepEqual(
//     generator.next(),
//     {
//       done: true, value: undefined
//     },
//     'saga must be done'
//   )
// }
//
// const assertSagaCycle = (assert, generator, cycles) => {
//   cycles.map((c) => {
//     const { func, error, response, message } = c
//     let next = null
//     if (error) {
//       next = generator.throw(error)
//     } else {
//       next = generator.next(response)
//     }
//
//     // Ugly as fuc
//     console.log('next', next.value)
//     if (next.value === undefined) {
//       assert.deepEqual(
//         null,
//         func(response),
//         message
//       )
//     } else {
//       assert.deepEqual(
//         next.value,
//         func(response),
//         message
//       )
//     }
//   })
// }
//
// test.skip('Assertions with tape.', (assert) => {
//   const generator = jqRequestListener(initialState)
//   assertSagaCycle(
//     assert,
//     generator,
//     [
//       {
//         func: () => put({ type: ACTION.JQ_FILTER_REQUEST }),
//         message: 'Should be listening to the JQ FILTER REQUESTS'
//       }, {
//         func: () => select(getActivePaneItem),
//         message: 'Should get activePaneItem from state'
//       }, {
//         func: () => call(run, null, null),
//         message: 'Should run node-jq'
//       }, {
//         func: () => put({ type: ACTION.OPEN_MODAL_VIEW }),
//         message: 'Should trigger the action open Modal'
//       }
//     ]
//   )
//
//   assertSagaIsDone(generator)
//
//   assert.end()
// })
