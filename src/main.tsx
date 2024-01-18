import { render } from 'preact'
import { Router, Route } from 'preact-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Detail from '@/pages/detail'
import Home from '@/pages/home'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import Meal from './pages/meal'

const queryClient = new QueryClient()

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:category" component={Detail} />
      <Route path="/:category/:id" component={Meal} />
    </Router>
  </QueryClientProvider>
)

render(<Main />, document.getElementById('app')!)
