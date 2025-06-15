import { App } from 'App'
import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import 'assets/styles/bootstrap-overrides.css'
import 'assets/styles/default-overrides.css'
import 'assets/styles/dark-mode-overrides.css'

import 'assets/styles/custom.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
