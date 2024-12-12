import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Inner from "./Inner.tsx";
import { userEvent } from "@testing-library/user-event";
import { CountContextReadOnly, CountContextWriteOnly } from "./CountContext.ts";

describe("Inner", () => {
  let spySetCount: () => void
  beforeEach(() => {
    spySetCount = vi.fn()
    render(
      <CountContextReadOnly.Provider value={{ count: 2 }}>
      <CountContextWriteOnly.Provider value={{ setCount: spySetCount }}>
        <Inner />
      </CountContextWriteOnly.Provider>)
      </CountContextReadOnly.Provider>)
  });

  test("＋を押すとちゃんとsetCountを呼ぶ", async () => {
    await userEvent.click(screen.getByText("+"))

    expect(spySetCount).toHaveBeenCalledWith(3)
  })

  test("ーを押すとちゃんとsetCountを呼ぶ", async () => {
    await userEvent.click(screen.getByText("-"))

    expect(spySetCount).toHaveBeenCalledWith(1)
  })
})