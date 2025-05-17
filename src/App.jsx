import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Story from "./components/story/Story.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Story imageUrl={'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg'} imageSize={100} text={"Ahmad"}/>
        <Story imageUrl={'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg'} imageSize={100} text={"Ahmad"}/>
        <Story imageUrl={'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg'} imageSize={100} text={"Ahmad"}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
