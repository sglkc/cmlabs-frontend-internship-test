import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Detail from '@/pages/detail'
import Home from '@/pages/home'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const queryClient = new QueryClient()

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/category/:category" component={Detail} />
    </Router>
  </QueryClientProvider>
)

render(<Main />, document.getElementById('app')!)
