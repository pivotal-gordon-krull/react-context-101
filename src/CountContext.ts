import { createContext } from "react";

export interface CountContextData {
  count: number,
  setCount: (count: number) => void
}

export const CountContext = createContext<CountContextData>({
  count: 0,
  setCount: () => {}
})