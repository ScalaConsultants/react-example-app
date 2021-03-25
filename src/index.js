import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/App'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import { ApolloClient, createNetworkInterface , ApolloProvider} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj3mzkoyv3b3e0189nnt1gh3v'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
), document.getElementById('app'))
