import { App } from 'App'
import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'assets/styles/bootstrap-overrides.css'
import 'assets/styles/default-overrides.css'

import 'assets/styles/dark-mode-overrides.css'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<App />)
