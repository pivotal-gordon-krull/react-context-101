import { useState } from "react"
import "./App.css"
import Outer from "./Outer.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Outer count={count} setCount={setCount}/>
    </div>
  )
}

export default App
