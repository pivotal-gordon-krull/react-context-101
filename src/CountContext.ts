import { createContext } from "react";

export interface CountContextDataReadOnly {
  count: number,
}

export interface CountContextDataWriteOnly {
  setCount: (count: number) => void
}

export const CountContextReadOnly = createContext<CountContextDataReadOnly>({
  count: 0,
})

export const CountContextWriteOnly = createContext<CountContextDataWriteOnly>({
  setCount: () => {}
})