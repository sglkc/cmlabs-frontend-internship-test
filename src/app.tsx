import { useState } from 'preact/hooks'
import Navbar from './components/Navbar/Navbar'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://preactjs.com" target="_blank">
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
