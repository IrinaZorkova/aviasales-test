import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import store from './store/createStore'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
//TODO: add pagination
//TODO: add tests
serviceWorker.unregister()
