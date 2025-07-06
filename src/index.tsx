import { App } from 'App'
import { createRoot } from 'react-dom/client'

import 'bootstrap-icons/font/bootstrap-icons.min.css'

import 'assets/styles/globals.css'
import 'assets/styles/colors.css'
import 'assets/styles/typography.css'
import 'assets/styles/spacings.css'

const container = document.getElementById('root')
// biome-ignore lint/style/noNonNullAssertion: This container element is ensured to exist by React. Look at public/index.html
const root = createRoot(container!)
root.render(<App />)
