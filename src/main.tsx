import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './app.tsx'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const queryClient = new QueryClient()

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Route path="/" component={App} default />
    </Router>
  </QueryClientProvider>
)

render(<Main />, document.getElementById('app')!)
