import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'

import './bootstrap-overrides.css'
import './dark-mode-overrides.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
