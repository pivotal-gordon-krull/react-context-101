import { useContext } from "react";
import { CountContextReadOnly, CountContextWriteOnly } from "./CountContext.ts";


const Inner = () => {
  const { count } = useContext(CountContextReadOnly)
  const { setCount } = useContext(CountContextWriteOnly)

  return (
    <div className="inner">
      <button onClick={() => { setCount(count+1)}}>+</button>
      <button onClick={() => { setCount(count-1)}}>-</button>
    </div>
  )
}

export default Inner
