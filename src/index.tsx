import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

import './styles/bootstrap-overrides.css'
import './styles/dark-mode-overrides.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
