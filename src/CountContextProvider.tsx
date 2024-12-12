import { ReactNode, useState } from "react";
import { CountContextReadOnly, CountContextWriteOnly } from "./CountContext.ts";

interface Props {
  children: ReactNode
}

function CountContextProvider({ children }: Props) {
  const [count, setCount] = useState(0)

  return (<CountContextReadOnly.Provider value={{ count }}>
    <CountContextWriteOnly.Provider value={{ setCount }}>
      {children}
    </CountContextWriteOnly.Provider>
  </CountContextReadOnly.Provider>);
}

export default CountContextProvider