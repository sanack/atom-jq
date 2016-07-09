// import test from 'tape'
// import createSagaMiddleware from 'redux-saga'
// import reducer from './../src/reducers'
// import { applyMiddleware, createStore } from 'redux'
//
// const mockStore = (state, saga) => {
//   return createStore(reducer, state, applyMiddleware(saga))
// }
//
// const initialState = {
//   isPanelVisible: false,
//   isBottomPanelFocused: false,
//   activePaneItem: null,
//   filter: null
// }
//
// test('createStore', (assert) => {
//   const saga = createSagaMiddleware()
//   const store = mockStore(initialState, saga)
//
//   assert.deepEqual(
//     store.getState(),
//     initialState,
//     'should have initialState at the first beginning'
//   )
//
//   assert.end()
// })
