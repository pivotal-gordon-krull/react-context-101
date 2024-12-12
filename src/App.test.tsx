import { beforeEach, describe, expect, test } from "vitest";
import App from "./App.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("App", () => {
  beforeEach(() => {
    render(<App />)
  });

  test("defaultで0が表示される", () => {
    expect(screen.getAllByText("0").length).toEqual(2)
  })

  test("＋を押すとcountが増える", async () => {
    await userEvent.click(screen.getAllByText("+")[0])
    expect(screen.getAllByText("1").length).toEqual(2)
    await userEvent.click(screen.getAllByText("+")[1])
    expect(screen.getAllByText("2").length).toEqual(2)
  })

  test("ーを押すとcountが減る", async () => {
    await userEvent.click(screen.getAllByText("-")[0])
    expect(screen.getAllByText("-1").length).toEqual(2)
    await userEvent.click(screen.getAllByText("-")[1])
    expect(screen.getAllByText("-2").length).toEqual(2)
  })
})