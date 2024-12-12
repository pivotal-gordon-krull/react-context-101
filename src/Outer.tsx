import Inner from "./Inner.tsx";
import { useContext } from "react";
import { CountContextReadOnly } from "./CountContext.ts";

const Outer = () => {
  const { count } = useContext(CountContextReadOnly)

  return (
    <div className="outer">
      <div>{count}</div>
      <Inner />
      <Inner />
    </div>
  )
}

export default Outer
