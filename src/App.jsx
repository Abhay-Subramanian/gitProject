import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 style={{ color: '#646cff' }}>Vite + React</h1>
        <h2 style={{ fontWeight: 'normal' }}>Learning Java & Python</h2>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <button onClick={() => setCount(count + 1)}>
            Click count: {count}
          </button>

          <p style={{ marginTop: '1rem' }}>
            Edit <code>src/App.jsx</code> and save to see live updates.
          </p>
        </div>

        <p className="read-the-docs" style={{ marginTop: '2rem' }}>
          Click the logos above to learn more about the technologies.
        </p>
      </div>
    </>
  )
}

export default App
