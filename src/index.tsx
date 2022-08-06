import App from 'App'
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'assets/styles/bootstrap-overrides.css'
import 'assets/styles/default-overrides.css'

import 'assets/styles/dark-mode-overrides.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
