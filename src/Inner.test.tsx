import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Inner from "./Inner.tsx";
import { userEvent } from "@testing-library/user-event";

describe("Inner", () => {
  let spySetCount: Mock
  beforeEach(() => {
    spySetCount = vi.fn()
    render(<Inner count={2} setCount={spySetCount} />)
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