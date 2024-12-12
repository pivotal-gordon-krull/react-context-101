import { ReactNode, useState } from "react";
import { CountContext } from "./CountContext.ts";

interface Props {
  children: ReactNode
}

function CountContextProvider({ children }: Props) {
  const [count, setCount] = useState(0)

  return (<CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>);
}

export default CountContextProvider