import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/App'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
