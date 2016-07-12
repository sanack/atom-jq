/** @babel */

import React from 'react'
import InputBottomView from './InputBottomView'
import { Provider } from 'react-redux'

export const App = (store) => (
  <Provider store={store}>
    <InputBottomView />
  </Provider>
)
