import { useContext } from "react";
import { CountContext } from "./CountContext.ts";


const Inner = () => {
  const { count, setCount } = useContext(CountContext)

  return (
    <div className="inner">
      {count}
      <button onClick={() => { setCount(count+1)}}>+</button>
      <button onClick={() => { setCount(count-1)}}>-</button>
    </div>
  )
}

export default Inner
