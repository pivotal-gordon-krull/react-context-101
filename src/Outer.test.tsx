import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CountContextReadOnly } from "./CountContext.ts";
import Outer from "./Outer.tsx";

describe("Outer", () => {
  beforeEach(() => {
    render(
      <CountContextReadOnly.Provider value={{ count: 2 }}>
          <Outer />
      </CountContextReadOnly.Provider>)
  });

  test("countが表示される", () => {
    expect(screen.getByText("2")).toBeInTheDocument()
  })
})