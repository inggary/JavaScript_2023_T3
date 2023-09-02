import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Gary")

  let nombre = ""

  const imprimir_nombre = (nombre) => {

    console.log(nombre)

  }

  function handleChange(event) {
    this.setState({value: event.target.value});
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gary Pimentel</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          }}>
          count is {count}
        </button>
      </div>
    </>
  )
}


