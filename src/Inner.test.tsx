import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Inner from "./Inner.tsx";
import { userEvent } from "@testing-library/user-event";
import { CountContext } from "./CountContext.ts";
import CountContextProvider from "./CountContextProvider.tsx";

describe("Inner", () => {
  describe("Test Double Context", () => {
    let spySetCount: () => void
    beforeEach(() => {
      spySetCount = vi.fn()
      render(
        <CountContext.Provider value={{ count: 2, setCount: spySetCount }}>
          <Inner />
        </CountContext.Provider>)
    });

    test("私たcountを表示される", () => {
      expect(screen.getByText("2")).toBeInTheDocument()
    })

    test("＋を押すとちゃんとsetCountを呼ぶ", async () => {
      await userEvent.click(screen.getByText("+"))

      expect(spySetCount).toHaveBeenCalledWith(3)
    })


    test("ーを押すとちゃんとsetCountを呼ぶ", async () => {
      await userEvent.click(screen.getByText("-"))

      expect(spySetCount).toHaveBeenCalledWith(1)
    })
  })

  describe("Real Context", () => {
    beforeEach(() => {
      render(
        <CountContextProvider>
          <Inner />
        </CountContextProvider>)
    });

    test("私たcountを表示される", () => {
      expect(screen.getByText("0")).toBeInTheDocument()
    })

    test("＋を押すとちゃんとsetCountを呼ぶ", async () => {
      await userEvent.click(screen.getByText("+"))

      expect(screen.getByText("1")).toBeInTheDocument()
    })


    test("ーを押すとちゃんとsetCountを呼ぶ", async () => {
      await userEvent.click(screen.getByText("-"))

      expect(screen.getByText("-1")).toBeInTheDocument()
    })
  })
})