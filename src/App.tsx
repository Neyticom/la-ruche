import { useState } from 'react'
import reactLogo from './assets/icon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>La ruche des pros</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tu as cliqué {count} fois :o
        </button>
        <p>
          Notre site arrive bientôt et ça va être une vraie singerie :P
        </p>
      </div>
      <p className="read-the-docs">
        Le futur du BTP se dessine aujourd'hui
      </p>
    </>
  )
}

export default App
