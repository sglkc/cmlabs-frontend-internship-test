import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { App } from './app.tsx'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const Main = () => (
  <Router>
    <Route path="/" component={App} default />
  </Router>
)

render(<Main />, document.getElementById('app')!)
