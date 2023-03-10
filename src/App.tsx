import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Teste do Vercel 3</h1>
      <div className="card">
        
        <p>
          Frango frito com farofa de banana
        </p>
      </div>
      <p className="read-the-docs">
        Eu estou morrendo de frio.
      </p>
    </div>
  )
}

export default App
