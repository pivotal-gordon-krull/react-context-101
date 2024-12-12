import { describe, expect, test } from "vitest";
import { useContext } from "react";
import { CountContextReadOnly, CountContextWriteOnly } from "./CountContext.ts";
import CountContextProvider from "./CountContextProvider.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("CountContextProvider", () => {
  function TestComponent() {
    const countContextReadOnly = useContext(CountContextReadOnly)
    const countContextWriteOnly = useContext(CountContextWriteOnly)

    return (
      <>
        <p>count:{countContextReadOnly.count}</p>

        <button
          onClick={() => countContextWriteOnly.setCount(5)}
        >
          Set
        </button>
      </>
    );
  }

  async function renderSubject() {
    return render(
      <CountContextProvider>
        <TestComponent />
      </CountContextProvider>,
    );
  }

  describe("Providerをrenderすると", () => {
    test("countは0です", async () => {
      await renderSubject();

      expect(screen.getByText("count:0")).toBeInTheDocument();
    });
  });

  describe("Setter", () => {
    test("setCount()を実行すると、countは5になる", async () => {
      await renderSubject();

      await userEvent.click(screen.getByText("Set"));
      expect(screen.getByText("count:5")).toBeInTheDocument();
    });
  });
});
