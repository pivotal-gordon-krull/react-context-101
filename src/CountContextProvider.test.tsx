import { describe, expect, test } from "vitest";
import { useContext } from "react";
import { CountContext } from "./CountContext.ts";
import CountContextProvider from "./CountContextProvider.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("CountContextProvider", () => {
  function TestComponent() {
    const countContext = useContext(CountContext)

    return (
      <>
        <p>count:{countContext.count}</p>

        <button
          onClick={() => countContext.setCount(5)}
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
