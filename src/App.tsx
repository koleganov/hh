import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
