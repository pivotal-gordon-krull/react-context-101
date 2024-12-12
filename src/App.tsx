import "./App.css"
import Outer from "./Outer.tsx";
import CountContextProvider from "./CountContextProvider.tsx";

const App = () => {

  return (
    <div className="app">
      <CountContextProvider>
        <Outer />
      </CountContextProvider>
    </div>
  )
}

export default App
