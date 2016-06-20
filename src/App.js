/** @babel */

import React from 'react'
import PanelView from './PanelView'
import { Provider } from 'react-redux'

export const App = (store) => (
  <Provider store={store}>
    <PanelView />
  </Provider>
)
