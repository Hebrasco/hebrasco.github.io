import { App } from 'App'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import 'assets/styles/bootstrap-overrides.css'
import 'assets/styles/default-overrides.css'
import 'assets/styles/dark-mode-overrides.css'

import 'assets/styles/custom.css'

const container = document.getElementById('root')
// biome-ignore lint/style/noNonNullAssertion: This container element is ensured to exist by React. Look at public/index.html
const root = createRoot(container!)
root.render(<App />)
